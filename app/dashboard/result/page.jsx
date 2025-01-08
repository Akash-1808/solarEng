"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function Resultpage() {
  return(<div>Results page</div>
  // const router = useRouter();
  // const [results, setResults] = useState(null);

  // useEffect(() => {
  //   const storedResults = localStorage.getItem('solarResults');
  //   if (storedResults) {
  //     setResults(JSON.parse(storedResults));
  //   } else {
  //     router.push('/dashboard/calculator');
  //   }
  // }, [router]);

  // if (!results) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="text-lg">Loading results...</div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  //     <div className="mx-auto max-w-lg text-center mb-8">
  //       <h1 className="text-2xl font-bold sm:text-3xl">Solar Potential Results</h1>
  //       <p className="mt-4 text-gray-500">
  //         Here's what we calculated for your solar installation
  //       </p>
  //     </div>

  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-lg font-semibold text-gray-800">System Size</h3>
  //         <div className="mt-2">
  //           <p className="text-3xl font-bold text-primary">{results.max_panels}</p>
  //           <p className="text-sm text-gray-500">Maximum Solar Panels</p>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-lg font-semibold text-gray-800">Optimal Setup</h3>
  //         <div className="mt-2">
  //           <p className="text-3xl font-bold text-primary">{results.optimal_tilt}°</p>
  //           <p className="text-sm text-gray-500">Panel Tilt Angle</p>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-lg font-semibold text-gray-800">Energy Production</h3>
  //         <div className="mt-2">
  //           <p className="text-3xl font-bold text-primary">{results.total_annual_energy}</p>
  //           <p className="text-sm text-gray-500">kWh per Year</p>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-lg font-semibold text-gray-800">Monthly Generation</h3>
  //         <div className="mt-2">
  //           <p className="text-3xl font-bold text-primary">{results.monthly_energy}</p>
  //           <p className="text-sm text-gray-500">kWh per Month</p>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-lg font-semibold text-gray-800">Financial Benefits</h3>
  //         <div className="mt-2">
  //           <p className="text-3xl font-bold text-primary">₹{results.savings}</p>
  //           <p className="text-sm text-gray-500">Annual Savings</p>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-lg font-semibold text-gray-800">Environmental Impact</h3>
  //         <div className="mt-2">
  //           <p className="text-3xl font-bold text-primary">{results.co2_reduction}</p>
  //           <p className="text-sm text-gray-500">Tons CO₂ Reduced per Year</p>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="mt-8 text-center">
  //       <button
  //         onClick={() => router.push('/dashboard/calculator')}
  //         className="inline-block rounded-lg bg-primary hover:bg-secondary px-5 py-3 text-sm font-medium text-white"
  //       >
  //         Calculate Another
  //       </button>
  //     </div>
  //   </div>
  );
}

export default Resultpage;