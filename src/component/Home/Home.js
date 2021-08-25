import React from 'react'
import Intro from './Intro/Intro'
import './Home.css';
import Portfolio from './Protfolio/Portfolio';
export default function Home() {
    return (
   
            
             <div className="sections">
                 <Intro />
                <Portfolio />
                {/*<Works />
                <Testimonials />
                <Contact /> */}
            </div>

    )
}
