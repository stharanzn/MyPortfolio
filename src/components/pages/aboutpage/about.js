import React from 'react'
import "./about.scss"

export default function About() {
  return (
    <>
    
    <div id='aboutPage' className='aboutPage'>
    <div className="aboutChar">
        <img src={process.env.PUBLIC_URL + "/images/aboutmeImage.png"} alt="about me" />
      </div>
      <div className='inner'>

        <div className='infoBox glass'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur ad officia porro tempora! Aperiam quas modi quae neque, ex cumque eveniet beatae veritatis impedit nostrum non facilis sequi similique.
        </div>

        <div className='infoBox glass'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur ad officia porro tempora! Aperiam quas modi quae neque, ex cumque eveniet beatae veritatis impedit nostrum non facilis sequi similique.
        </div>
      </div>

      

      <div className='inner'>

        <div className='infoBox glass'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur ad officia porro tempora! Aperiam quas modi quae neque, ex cumque eveniet beatae veritatis impedit nostrum non facilis sequi similique.
        </div>

        <div className='infoBox glass'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur ad officia porro tempora! Aperiam quas modi quae neque, ex cumque eveniet beatae veritatis impedit nostrum non facilis sequi similique.
        </div>
      </div>

    </div>

    </>
  )
}
