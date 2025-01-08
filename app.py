from flask import Flask, request, jsonify
from flask_cors import CORS  # Add CORS support
import requests
import math
import json

app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000"],  # Add your Next.js development URL
        "methods": ["POST", "OPTIONS"]
    }
})

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

@app.route("/", methods=["GET"])
def index():
    return jsonify({"status": "API is running"})

@app.route("/api/calculate", methods=["POST"])
def calculate():
    try:
        # Get JSON data from request
        data = request.get_json() if request.is_json else request.form

        # User Inputs with explicit float conversion
        lat = float(data.get("latitude"))
        lon = float(data.get("longitude"))
        floor_area = float(data.get("floor_area"))
        monthly_bill = float(data.get("monthly_bill"))

        # Validate inputs
        if not (-90 <= lat <= 90):
            return jsonify({"error": "Invalid latitude. Must be between -90 and 90."}), 400
        if not (-180 <= lon <= 180):
            return jsonify({"error": "Invalid longitude. Must be between -180 and 180."}), 400
        if floor_area <= 0:
            return jsonify({"error": "Floor area must be greater than 0."}), 400
        if monthly_bill <= 0:
            return jsonify({"error": "Monthly bill must be greater than 0."}), 400

        # Constants with explicit float conversion
        panel_size = float(data.get("panel_size", 1.7))
        panel_efficiency = float(data.get("panel_efficiency", 20)) / 100
        electricity_rate = float(data.get("electricity_rate", 7))
        co2_offset = float(data.get("co2_offset", 0.7))

        # Calculate system specifications
        optimal_tilt = calculate_optimal_tilt(lat)
        max_panels = math.floor(floor_area / panel_size)
        system_capacity = max_panels * panel_efficiency  # kW
        azimuth = 180.0  # South-facing

        # Get solar data
        solar_data = fetch_solar_data(lat, lon, optimal_tilt, azimuth, system_capacity)

        if not solar_data:
            return jsonify({"error": "Unable to fetch solar data. Please try again later."}), 500

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
            return jsonify({"error": "No valid solar output data received."}), 500

        total_annual_energy = sum(hourly_outputs)
        monthly_energy = total_annual_energy / 12
        
        monthly_usage_kwh = monthly_bill / electricity_rate
        annual_usage_kwh = monthly_usage_kwh * 12
        savings = min(total_annual_energy, annual_usage_kwh) * electricity_rate
        excess_energy = max(0, total_annual_energy - annual_usage_kwh)
        co2_reduction = total_annual_energy * co2_offset

        return jsonify({
            "max_panels": round(max_panels),
            "optimal_tilt": round(optimal_tilt, 1),
            "total_annual_energy": round(total_annual_energy, 1),
            "monthly_energy": round(monthly_energy, 1),
            "savings": round(savings, 2),
            "excess_energy": round(excess_energy, 1),
            "co2_reduction": round(co2_reduction, 1)
        })
        
    except KeyError as e:
        return jsonify({"error": f"Missing required field: {str(e)}"}), 400
    except ValueError as e:
        return jsonify({"error": f"Invalid input value: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)