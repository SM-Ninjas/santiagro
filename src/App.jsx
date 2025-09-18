import React from 'react'
import Header from './components/Header'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './home/Home'
import Features from './sections/Features'
import FCard from './cards/FCard'
import Products from './cards/Products'
import Sustain from './sections/Sustain'

export default function App() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <RootLayout />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/fcard",
        element: <FCard />
      },
      {
        path: "/product",
        element: <Products />
      },
      {
        path: "/sustain",
        element: <Sustain />
      }
    ])
  return <RouterProvider router={router} /> 
}
