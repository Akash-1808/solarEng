from flask import Flask, render_template, request
import requests
import math
import json

app = Flask(__name__)

# Renewable Ninja API details
RENEWABLE_NINJA_API_URL = "https://www.renewables.ninja/api/data/pv"
API_TOKEN = "fd5a9a0f960a588e9abce483ede6d2c3103e8d1b"

def fetch_solar_data(lat, lon, tilt, azimuth, capacity):
    headers = {
        "Authorization": f"Token {API_TOKEN}",
        "Accept": "application/json"
    }
    
    payload = {
        "lat": float(lat),
        "lon": float(lon),
        "date_from": "2023-01-01",
        "date_to": "2023-12-31",
        "dataset": "merra2",
        "capacity": float(capacity),
        "system_loss": 0.1,
        "tracking": 0,
        "tilt": float(tilt),
        "azim": float(azimuth),
        "format": "json"
    }
    
    try:
        response = requests.get(
            RENEWABLE_NINJA_API_URL,
            headers=headers,
            params=payload,
            timeout=30
        )
        
        if response.status_code != 200:
            print(f"API Error: Status {response.status_code}")
            print(f"Full Response: {response.text}")
            return None
            
        data = response.json()
        
        if "data" not in data:
            print(f"Unexpected data structure: {json.dumps(data, indent=2)}")
            return None
            
        return data
        
    except Exception as e:
        print(f"API request failed: {str(e)}")
        return None

def calculate_optimal_tilt(lat):
    return abs(lat) * 0.87 if abs(lat) < 25 else abs(lat) * 0.76

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    try:
        # User Inputs with explicit float conversion
        lat = float(request.form["latitude"])
        lon = float(request.form["longitude"])
        floor_area = float(request.form["floor_area"])
        monthly_bill = float(request.form["monthly_bill"])

        # Validate inputs
        if not (-90 <= lat <= 90):
            return render_template("result/page.jsx", error="Invalid latitude. Must be between -90 and 90.")
        if not (-180 <= lon <= 180):
            return render_template("result/page.jsx", error="Invalid longitude. Must be between -180 and 180.")
        if floor_area <= 0:
            return render_template("result/page.jsx", error="Floor area must be greater than 0.")
        if monthly_bill <= 0:
            return render_template("result/page.jsx", error="Monthly bill must be greater than 0.")

        # Constants with explicit float conversion
        panel_size = float(request.form.get("panel_size", 1.7))
        panel_efficiency = float(request.form.get("panel_efficiency", 20)) / 100
        electricity_rate = float(request.form.get("electricity_rate", 7))
        co2_offset = float(request.form.get("co2_offset", 0.7))

        # Calculate system specifications
        optimal_tilt = calculate_optimal_tilt(lat)
        max_panels = math.floor(floor_area / panel_size)
        system_capacity = max_panels * panel_efficiency  # kW
        azimuth = 180.0  # South-facing

        # Get solar data
        solar_data = fetch_solar_data(lat, lon, optimal_tilt, azimuth, system_capacity)

        if not solar_data:
            return render_template("result/page.jsx", error="Unable to fetch solar data. Please try again later.")

        # Process results - Modified to handle nested electricity values
        hourly_outputs = []
        for timestamp, output in solar_data['data'].items():
            if isinstance(output, dict) and 'electricity' in output:
                hourly_outputs.append(float(output['electricity']))
            elif isinstance(output, (int, float)):
                hourly_outputs.append(float(output))
            else:
                print(f"Unexpected output format for {timestamp}: {output}")

        if not hourly_outputs:
            return render_template("result/page.jsx", error="No valid solar output data received.")

        total_annual_energy = sum(hourly_outputs)
        monthly_energy = total_annual_energy / 12
        
        monthly_usage_kwh = monthly_bill / electricity_rate
        annual_usage_kwh = monthly_usage_kwh * 12
        savings = min(total_annual_energy, annual_usage_kwh) * electricity_rate
        excess_energy = max(0, total_annual_energy - annual_usage_kwh)
        co2_reduction = total_annual_energy * co2_offset

        return render_template(
            "result.html",
            max_panels=round(max_panels),
            optimal_tilt=round(optimal_tilt, 1),
            total_annual_energy=round(total_annual_energy, 1),
            monthly_energy=round(monthly_energy, 1),
            savings=round(savings, 2),
            excess_energy=round(excess_energy, 1),
            co2_reduction=round(co2_reduction, 1)
        )
        
    except Exception as e:
        print(f"Calculation error: {str(e)}")
        return render_template("result/page.jsx", error=f"An error occurred during calculations: {str(e)}")

if __name__ == "__main__":
    app.run(debug=True)