import React from 'react'
import HeroSection from '../Sections/HeroSection/HeroSection'
import CommunityStories from '../Sections/CommunityStories/CommunityStories'
import Journey from '../Sections/Journey/Journey'
import Feature from '../Sections/FeaturesSection/Feature'
import Subscription from '../Sections/Subscription/Subscription'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Feature/>
    <Subscription/>
    <CommunityStories/>
    <Journey/>
    </>
  )
}

export default Home