import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ANXIETY from '../components/MH-Anxiety/Anxiety'
import AnxietySection from '../components/MH-Anxiety/AnxietySection'
import ContactForm2 from '../components/contact/Contact2'


const Anxiety = () => {
  return (
    <>
    <Navbar /> 
    <ANXIETY />
    <AnxietySection />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Anxiety