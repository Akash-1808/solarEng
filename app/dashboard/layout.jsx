import React from 'react'
import SideBar from './_components/SideBar'

function Dashboardlayout({children}) {
  return (
    <div className='flex flex-col justify-between'>
        <div className='md:w-64 hidden md:block shadow-md'>
            <SideBar/>
        </div>
        <div className='md:ml-64 p-10'>
            {children}
        </div>
        </div>
  )
}

export default Dashboardlayout