import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PANICDISORDER from '../components/MH-PanicDisorder/PanicDisorder'
import PanicDisorderSection from '../components/MH-PanicDisorder/PanicDisorderSection'
import ContactForm2 from '../components/contact/Contact2'


const PanicDisorder = () => {
  return (
    <>
    <Navbar /> 
    <PANICDISORDER />
    <PanicDisorderSection />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default PanicDisorder