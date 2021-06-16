import logo from "./logo.svg";
import React, { useState,useRef,useEffect } from "react";
import { gsap } from "gsap";



const App = () => {
  const [toggle,setToggle]= useState(false)
  const [tourne,setTourne]= useState(false)

  const myRef=useRef(null)

  useEffect(() => {
    tourne?
    gsap.to(myRef.current,{
   flex:5
    }    )
    :
    gsap.to(myRef.current,{
flex:1
    }    )
    
   
  }, [tourne])

  return (
		<div style={{display:'flex'}}>
			<h1>toto</h1>
        <div style={toggle?div2:div1} ref={myRef}>
          lkfzlke,vzlkevlkzev,lzve,lkzev,</div>
        <button style={{flex:1}} onMouseMove={()=>setToggle(!toggle)}>Click moi dessus</button>
        <button style={{flex:1}} onMouseEnter={()=>setTourne(!tourne)} onMouseLeave={()=>setTourne(!tourne)}>Click moi pour tourner</button>
		</div>
	);
};
const div1={
  padding: '100px',
  backgroundColor:'green'
}
const div2={
  padding: '10px',
  backgroundColor:'red'
}
export default App;
