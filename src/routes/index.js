import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Preloader from '../components/Preloader'
import { Home, Layout } from '../pages'

const Routers = () => {
  return (
    <BrowserRouter>
        <Preloader/>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers