import React from 'react'

function Hero() {
  return (
    
        <section className="bg-[url('https://wallpaperaccess.com/full/1743472.jpg')] bg-no-repeat bg-cover">
        {/*  <section className='bg-slate-100'> */}
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl ">
        <div className='text-primary' >OUR SolarEnergy </div>
        
        <strong className="font-extrabold  sm:block text-slate-100"> Sustainabilty with us </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-slate-100">
        Secure your & your future genration with solareng.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
    
  )
}

export default Hero