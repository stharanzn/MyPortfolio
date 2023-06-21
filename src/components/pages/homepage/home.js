import React, {useRef} from 'react'
import "./home.scss"
import About from '../aboutpage/about'
import useMousePosition from "../../utils/useMousePosition.js";
import Projects from '../projectspage/projects';

export default function Home() {  

  const mousePosition = useMousePosition(); 
     
  

  const leftEyeRef = useRef(null)
    
  var x = 0;
  var y = 0;
  const leftEye = leftEyeRef.current;
  if(leftEye){
    const {left, top} = leftEye.getBoundingClientRect();
    const leftWidth = leftEye.clientWidth;  
    const leftHeight = leftEye.clientHeight;
     x = left + (leftWidth/2)
     y = top + (leftHeight/2)
     
  }

  
  
  var rad = Math.atan2(mousePosition.x - x , mousePosition.y - y)
  var rot = (rad * (180/Math.PI)*-1) + 90;
  
  const elementStyle = {
    '-webkit-transform': `rotate(${rot}deg)`,
    '-mox-transform':  `rotate(${rot}deg)`,
    '-ms-transform':  `rotate(${rot}deg)`,
    transform:  `rotate(${rot}deg)`
    // transform: `rotate(${rot*100}deg)`,
  };


  return (
    <div className='homeBg'>  

    {/* <div className='faceChar'>
        <div class='face'>
          <div style={elementStyle} id='eye' ref={leftEyeRef}></div>
          <div style={elementStyle} id='eye'></div>
        </div>
      </div>           */}

        <div className='homeCover'>
          <img className='homeChar' alt='char' src={process.env.PUBLIC_URL + "/images/char.png"}/>
            Home page            
        </div>
        <About/>
        <Projects/>

    </div>
  )
}
