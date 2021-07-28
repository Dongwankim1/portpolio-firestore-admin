import React, { useEffect,useRef } from 'react'
import './Intro.css'
import {init} from 'ityped';



export default function Intro() {

    const textRef = useRef();


    useEffect(() => {
      init(textRef.current,{
          showCursor:true,
          backDelay:1500,
          backSpeed:60,
          
          strings:["Developer","Designer","Content Creator"]
      })
    }, [])

    return (
        <div className="intro" id="intro">
          <div className="intro__left">
              <div className="imgContainer">
                  <img src="assets/man.png" alt="" />
              </div>
          </div>
          <div className="intro__right">
              <div className="intro__wrapper">
                  <h2>Hi There, I'm</h2>
                  <h1>Dong Wan Kim</h1>
                  <h3>FrontEnd        <span className="intro__span" ref={textRef}></span></h3>
              </div>
              <a className="intro__portfolio" href="#portfolio">
                  <img src="assets/down.png" alt="" />
              </a>
          </div>
        </div>
    )
}
