import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OPIOID from '../components/Addiction-Opioid/Opioid'
import OpioidSection from '../components/Addiction-Opioid/OpioidSection'
import ContactForm2 from '../components/contact/Contact2'


const Opioid = () => {
  return (
    <>
    <Navbar /> 
    <OPIOID />
    <OpioidSection />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Opioid