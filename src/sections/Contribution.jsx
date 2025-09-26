import { Button, Image } from '@heroui/react'
import React from 'react'

export default function Contribution() {
  return (
    <div className='flex flex-col items-center  mx-auto my-8 p-4 bg-white rounded-lg shadow-md space-y-4'>
      <h1 className='text-4xl font-bold text-center mt-2'>Our Contribution</h1>
      <br />
      <p className='w-[1200px]'>At Santi Agro Farm, we believe in giving back to the community and supporting sustainable agricultural practices. Our contributions include educational programs for farmers, community development initiatives, and partnerships with local organizations to promote eco-friendly farming techniques. We are dedicated to making a positive impact on the lives of farmers and the environment.</p>
      <Image
        src='https://plus.unsplash.com/premium_photo-1682092699213-6b0b5cdcadef?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFncm8lMjBmYXJtJTIwZm9yJTIwc29jaWV0eXxlbnwwfHwwfHx8MA%3D%3D'
      />
      <br />
      <Button
        variant='shadow'
        className=' '>Learn More</Button>
    </div>
  )
}
