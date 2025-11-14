import { useState } from 'react'
import HeroSection from './components/landing/HeroSection'
import HowItWorks from './components/landing/HowItWorks'
import FeaturedDestinations from './components/landing/FeaturedDestinations'
import AiAssistant from './components/landing/AiAssistant'
import PricingPlans from './components/landing/PricingPlans'



function App() {
  
  return (
    <div className="bg-dark">
      <HeroSection />
      <HowItWorks /> 
      <FeaturedDestinations />
      <AiAssistant />
      <PricingPlans />
  
    </div>
  )
}

export default App
