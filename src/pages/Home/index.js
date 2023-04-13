import React from 'react'
import { Banner, Hero, History, Information, Partner, Subscribe, Team } from '../../components'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
        <Hero/>
        <History/>
        <Information/>
        <Team/>
        <Banner/>
        <Partner/>
        <Subscribe/>
        <Footer/>
    </>
  )
}

export default Home