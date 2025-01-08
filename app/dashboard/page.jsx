import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Card1 from './_components/Card1'

function Dashboard() {
  return (
    <div >
        <div className='grid grid-cols-2'><Card1  title={"Solar Energy Solutions "} description={`Generate Your Own Power: Harness the sun's energy with solar panels.
                     Save & Earn: Reduce electricity bills and earn by exporting excess energy to the grid.
                `} />
        <Card1  title={`Power Your Home with Solar Energy`} description={`Cut Your Bills: Save money by generating your own electricity.
Sell Excess Energy: Earn through net metering or feed-in tariffs.`}/></div>
        

<span className="relative flex justify-center ">
  <div
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 bg-white px-6">Secure your Future with us</span>
</span>
    </div>
  )
}

export default Dashboard