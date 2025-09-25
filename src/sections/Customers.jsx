import React from 'react'

export default function Customers() {
  return (
  <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1731021988029-16abdab34bd1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5lcGFsaSUyMGZsYWd8ZW58MHx8MHx8fDA%3D')",
        backgroundColor: "rgba(255,255,255,0.8)",
        backgroundBlendMode: "lighten"
      }}
    >
      <div className='flex flex-col items-center  mx-auto my-8 p-4 rounded-lg space-y-4 w-[70%]'>
        <text className='text-4xl font-bold text-center mt-2'>Commited To Customers</text>
        <br />
        <p className='text-xl text-center'>At Santi Agro Farm, we take pride in our diverse and satisfied customer base. Our customers range from small-scale farmers to large agricultural enterprises, all of whom trust us for high-quality seeds, fertilizers, and farming equipment. We are committed to providing exceptional service and support to help our customers achieve their agricultural goals.</p>

      </div>
    </div>
  )
}
