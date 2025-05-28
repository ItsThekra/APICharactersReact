import React from 'react'
// import { Router } from 'react-router'
import { Outlet, createBrowserRouter , RouterProvider  } from 'react-router'
import Footer_component from '../components/Footer_component'
import Navbar_component from '../components/Navbar_component'
import Home_page from '../pages/Home_page'
import Charecter_page from '../pages/Charecter_page'
import Wellcome_page from '../pages/Wellcome_page'

function Layout()
{
    return(
    <>
    <Navbar_component />
    <Outlet />
    <Footer_component />
    </>
    )
}
const router = createBrowserRouter([
    {   
        path:'/',
        element: <Layout />,
        children:
        [
        {path:'/', element: <Home_page />},
        {path:'/home', element: <Home_page />},
        {path:'/charecter/:id', element: <Charecter_page />},

        ],
    },
]);

function Router() {
  return (
   <RouterProvider router={router}/>
  )
}

export default Router