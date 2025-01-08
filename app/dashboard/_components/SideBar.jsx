"use client"
import Image from 'next/image'
import React from 'react'
import { HiOutlineHome,HiOutlineCalculator } from "react-icons/hi";
import { HiOutlinePower } from "react-icons/hi2";
import { FaQuestion } from "react-icons/fa";
import { usePathname } from 'next/navigation';

function SideBar() {
    const Menu =[{
        id:1,
        name:'home',
        icon:<HiOutlineHome/>,
        path:'/dashboard'
    },{
        id:1,
        name:'Calculate',
        icon:<HiOutlineCalculator />,
        path:'/dashboard/calculator'
    },{
        id:1,
        name:'FAQ',
        icon:<FaQuestion />,
        path:'/dashboard/FAQ'
    },{
        id:1,
        name:'Logout',
        icon:<HiOutlinePower />,
        path:'/dashboard/Logout'
    },]
    const path = usePathname()
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src={'/logo.svg'} width={150} height={150}/>
        <hr className='my-5 '/>
        <div>
            
            {Menu.map((item,index)=>{
               return  <a key={item.id} href={item.path} className={`flex p-3 m-1 items-center gap-2 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg ${item.path==path&&'bg-gray-100 text-black'}`}><div className='text-3xl'>{item.icon}</div>
                <h2>{item.name}</h2>
                </a> 
  
            })}
            
        </div>
        </div>
  )
}

export default SideBar