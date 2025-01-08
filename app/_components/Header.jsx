import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex  justify-between p-5 shadow-m items-center'>
       
        <Image src={'/logo.svg'} width={150} height={150}/>
        <a href='/dashboard'><Button>Dashboard</Button></a>
    </div>
  )
}

export default Header