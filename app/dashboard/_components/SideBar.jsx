import Image from 'next/image'
import React from 'react'

function SideBar() {
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src={'/logo.svg'} width={150} height={150}/>
        <hr className='my-5'/>
        SideBar
        </div>
  )
}

export default SideBar