import { Button, Image } from '@heroui/react'
import React from 'react'

export default function Sustain() {
  return (
    <div className='flex flex-col items-center max-w-[1240px] mx-auto my-8 p-4 bg-white rounded-lg shadow-md space-y-4'>
      <h1 className='text-4xl font-bold text-center mt-8'>Santi AgroFarm for Sustainable Agriculture</h1>
      <br />
      <p>At Santi AgroFarm, we are committed to promoting sustainable agricultural practices that benefit both farmers and the environment. Our approach focuses on eco-friendly farming techniques, resource conservation, and community empowerment to ensure a healthier planet for future generations.</p>
      <Image
        src='https://thumbs.dreamstime.com/b/regenerative-agriculture-sustainable-farming-practices-outline-collection-labeled-elements-crop-rotation-health-333053745.jpg'
      />
      <Button
        variant='shadow'
        className=''>Read More</Button>

    </div>
  )
}
