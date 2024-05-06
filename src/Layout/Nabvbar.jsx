import React, { useEffect, useState } from 'react'
import whole from '../assets/whole.png'
import { IoSearchSharp } from "react-icons/io5";
import Login from './Login';


const Nabvbar = () => {
const [display,setDisplay] = useState(false);
  
  // const popup=()=>{
  //   console.log("click");
  //   return (<Login/>);

  // }
  // {
  //   useEffect(()=>{
  //     console.log("cli");

  //   },[display])
  //    };
  return (
    <>
  
{ display? <Login/>: ""}
        <nav className="navbar-css navbar navbar-expand-sm text-size text-dark navbar-dark bg-light py-4 justify-content-around ">
  <div className="container align-items-center">
  <a className="navbar-brand" href="#"> 
     <img src={whole} alt="Avatar Logo"  className="rounded-pill" /> 
    </a>

    <div class="input-group mb-3 justify-content-center" >
  
  <input type="text"  className="bg-light input-nav"  placeholder="Search for your favourite group in ATG" />
</div>
<div className='d-flex text-nowrap'><p >Create Accont. </p><span class='text-primary mx-3' onClick={()=>setDisplay(true)}>It's free</span></div>

  </div>
</nav>
    </>
  )
}

export default Nabvbar