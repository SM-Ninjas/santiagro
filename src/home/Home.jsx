import { Button, Image } from '@heroui/react'
import React from 'react'
import Header from '../components/Header'
import Features from '../sections/Features'
import Products from '../cards/Products'
import Sustain from '../sections/Sustain'
import Contribution from '../sections/Contribution'

export default function Home() {
  return (
    <div>
      <Header />
    
    <div className='max-w-[1240px] mx-auto my-2 bg-white rounded-lg shadow-md'>
      
      <Image className='w-screen'
        src='https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D'
      />
      <div className='p-4 space-y-4'>
        <h1 className='text-4xl font-bold text-center mt-4'>Welcome to Santi Agro Farm</h1>
        <p>Santi Agro Farm is a pioneering agricultural enterprise dedicated to empowering farmers through comprehensive solutions. Our mission is to transform every farmer into a Santi-Kisan – a term we've coined for progressive cultivators who thrive through our integrated support system. We equip Santi-Kisans with everything needed to elevate their livelihood, boost their income, and advance their farming practices to new heights of success and sustainability.</p>
        </div>
      </div>
      <div className='my-8'>
        <Features />
      </div>
        <div className=''>
        <h2 className='text-4xl font-bold text-center mt-8'>Our Products</h2>
      </div>
      <div className='flex flex-col  max-w-[1240px] mx-auto my-8 p-4 bg-amber-100 rounded-lg shadow-md'>
        <Products />
        <Button className="mt-4 w-10" color="warning" variant="shadow">Learn More</Button>
      </div>
      <Sustain />
      <Contribution />
</div>    
  )
}
