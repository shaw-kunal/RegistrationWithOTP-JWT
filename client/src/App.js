import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import all Component
import Username from './components/Username'
import Password from './components/Password'
import Register from './components/Register'
import Recovery from './components/Recovery'
import Reset from './components/Reset'
import PageNotFount from './components/PageNotFount'
import Profile from './components/Profile'


// route router

const router = createBrowserRouter([
    {
        path: '/',
        element: <Username/>

    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <div>Login router</div>
    },
    {
        path: "/password",
        element: <Password/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/recovery",
        element: <Recovery/>
    },
    {
        path: "/reset",
        element: <Reset/>
    },
    {
        path: "*",
        element: <PageNotFount/>
    }

])


const App = () => {
    return (
        <main>
            <RouterProvider router={router}>
            </RouterProvider>
        </main>
    
  )
}

export default App
