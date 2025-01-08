import React from 'react'

function FAQ() {
  return (
    <div className="space-y-4">
        <h2 className='mt-10 text-3xl font-bold'  >FAQs for Solar Energy</h2>
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        How does solar energy work?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      Solar panels capture sunlight and convert it into electricity using photovoltaic (PV) cells. <br /> 
      This energy can be used directly in your home or stored in batteries for later use.
      </p>
    </details>
  
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        What are the benefits of using solar energy?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
        -Reduces electricity bills. <br />
        -Environmentally friendly, with no greenhouse gas emissions. <br />
        -Low maintenance costs. <br />
        -Increases energy independence. <br />
        -Can earn you money through incentives like net metering or feed-in tariffs.
      </p>
    </details>

    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        How can I send excess energy back to the grid?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      You can send excess energy to the grid by installing a grid-tied solar system and a bi-directional meter. <br/>
       Sign up for a net metering or feed-in tariff program through your electricity provider.
      </p>
    </details>
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        
            Indian Government Programs for Solar Energy
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      Net Metering Policies: Export excess solar energy to the grid and get credits on your electricity bill. <a href='https://solarrooftop.gov.in/' className='text-blue-500'>https://solarrooftop.gov.in/</a> <br />
      Grid-Connected Rooftop Solar Scheme: Get up to 40% subsidy for installing rooftop solar systems. <a href='https://solarrooftop.gov.in/' className='text-blue-500'>https://solarrooftop.gov.in/</a> <br />
      Kusum Yojana: Farmers can install solar pumps and sell surplus energy to the grid.<a href='https://mnre.gov.in/' className='text-blue-500'>https://mnre.gov.in/</a> <br />
      Feed-In Tariff Programs: Earn money for each unit of solar energy exported to the grid.<a href='https://www.tangedco.gov.in/' className='text-blue-500'>https://www.tangedco.gov.in/</a> <br />
      </p>
    </details>
  </div>
  )
}

export default FAQ