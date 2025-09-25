import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Santi Agro Farm</h2>
          <p className="text-sm">Empowering Farmers. Sustaining Communities.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row gap-4 text-sm">
            <li>
              <a href="/home" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/features" className="hover:underline">Features</a>
            </li>
            <li>
              <a href="/products" className="hover:underline">Products</a>
            </li>
            <li>
              <a href="/sustain" className="hover:underline">Sustainability</a>
            </li>
            <li>
              <a href="/customers" className="hover:underline">Customers</a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-right text-xs">
          <p>Contact: info@santiagrofarm.com</p>
          <p>&copy; {new Date().getFullYear()} Santi Agro Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}