import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import { common } from '@material-ui/core/colors';
import './Header.css'

const Header = ({menuOpen,setMenuOpen}) =>{

    const handleMenu =() =>{
        setMenuOpen(!menuOpen)
     }


    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                <a href="https://github.com/Dongwankim1">
                        <FacebookIcon   style={menuOpen ? ({ color: common.white }) : null} fontSize="large"/>
                        </a>
                        <a href="https://github.com/Dongwankim1">
                        <GitHubIcon style={menuOpen ? ({ color: common.white }) : null} fontSize="large"/>
                        </a>
                        <a href="https://www.linkedin.com/in/%EB%94%94%EC%B0%8C-hip-05a2791a2/">
                        <LinkedInIcon style={menuOpen ? ({ color: common.white }) : null} fontSize="large"/>
                    </a>
                    <div className="itemContainer">
                 

                    </div>
                </div>
                <div className="middle">
              
                </div>
                <div className="right">
                    <div className={"hamburger " + (menuOpen && "active")} onClick={handleMenu} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;

