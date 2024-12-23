import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Packages from './Components/Packages'
import Services from './Components/Services'
import Contact from './Components/ContactUs'
import NoPage from './Components/NoPage'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/packages' Component={Packages} />
            <Route path='/services' Component={Services} />
            <Route path='/contact' Component={Contact} />
            <Route path='*' Component={NoPage} />
        </Routes>
    )
}

export default Routing
