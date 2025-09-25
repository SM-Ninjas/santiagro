import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './home/Home'
import Features from './sections/Features'
import FCard from './cards/FCard'
import Products from './cards/Products'
import Sustain from './sections/Sustain'
import Customers from './sections/Customers'
import Footer from './components/Footer'

export default function App() {

    const router = createBrowserRouter([
      {
        path: "/root",
        element: <RootLayout />,
      },
      {
        path: "/",
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
      },
      {
        path: "/customers",
        element: <Customers />
      },
      {
        path: "/footer",
        element: <Footer />
      }
    ])
  return <RouterProvider router={router} /> 
}
