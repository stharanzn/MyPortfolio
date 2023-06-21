
import "./topnavBar.scss"
import {NavLink} from "react-router-dom"


export const TopnavBar = () => {
   


  return (
  <>

    <nav>
        {/* <header><a href="/"> <img src={process.env.PUBLIC_URL + '/images/faviconDark.png'} alt="logo"/></a></header> */}
        <li>
            <a href="#about">About</a>
        </li>                    
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </nav>


  </>
  );
}
