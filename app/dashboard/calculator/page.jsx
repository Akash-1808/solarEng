"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Calculator() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('http://localhost:5000/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        // Store results in localStorage for the result page
        localStorage.setItem('solarResults', JSON.stringify(data));
        router.push('/dashboard/calculator/result');
      }
    } catch (error) {
      console.error('Detailed error:', error)
      setError('Failed to calculate solar potential. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-slate-100 rounded-lg">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl">Solar Energy Calculator</h1>

        <p className="mt-4 text-gray-500">
          Calculate your solar energy potential and savings based on your location and usage
        </p>
      </div>

      {error && (
        <div className="mx-auto mt-4 max-w-md p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="latitude" className="sr-only">Latitude:</label>
          <div className="relative">
            <input
              type="number"
              step="0.000001"
              id="latitude"
              name="latitude"
              required
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Latitude: eg, 28.630441"
            />
          </div>
        </div>

        <div>
          <label htmlFor="longitude" className="sr-only">Longitude:</label>
          <div className="relative">
            <input
              type="number"
              step="0.000001"
              id="longitude"
              name="longitude"
              required
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Longitude: e.g., 77.440174"
            />
          </div>
        </div>

        <div>
          <label htmlFor="floor_area" className="sr-only">Floor Area (in m²):</label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              id="floor_area"
              name="floor_area"
              required
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Floor Area (in m²): e.g, 100"
            />
          </div>
        </div>

        <div>
          <label htmlFor="monthly_bill" className="sr-only">Average Monthly Electricity Bill (₹):</label>
          <div className="relative">
            <input
              type="number"
              step="1"
              id="monthly_bill"
              name="monthly_bill"
              required
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Average Monthly Electricity Bill (₹): e.g, 5000"
            />
          </div>
        </div>

        <div className="flex items-center">
          <button
            type="submit"
            disabled={loading}
            className="inline-block rounded-lg bg-primary hover:bg-secondary px-5 py-3 text-sm font-medium text-white disabled:opacity-50"
          >
            {loading ? 'Calculating...' : 'Calculate Solar Potential'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;