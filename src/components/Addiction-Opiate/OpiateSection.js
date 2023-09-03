import React from 'react'
import { FiCheck } from 'react-icons/fi';

import './OpiateSection.css'

const OpiateSection = () => {
  return (
    <>

            <div className='kratom-section container'>
              <div className='kratom-section-content'>
                <div className='kratom-section-flex'>

                  <div className='kratom-section-left'>
                    <h1>KRATOM ADDICTION</h1>
                    <p>Easily addictive and often associated with synthetic opioids, opiates can be specifically categorized as natural opioids, including:
                    <br/><br/>
                    <ul>
                      <li><FiCheck/> Opium</li>
                      <li><FiCheck/> Heroin</li>
                      <li><FiCheck/> Codeine</li>
                      <li><FiCheck/> Drug cravings</li>
                      <li><FiCheck/> Morphine</li>
                    </ul>
                    Opiates’ original, medically intended use was for treating pain, however they are highly misused and addictive. Patients that are prescribed or receive opiates for medical remedies can quickly find themselves on a fast path to addiction.<br/>Like other addictive substances, addiction is often a vicious cycle, where the user will go to extreme measures to obtain opiates and use them in higher amounts over time to achieve the same feelings or high.
                    </p>
                  </div>

                  <div className='kratom-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/heroin-addiction.jpg' alt="activities" />
                  </div>

                </div>
              </div>
            </div>


    </>
  )
}

export default OpiateSection
