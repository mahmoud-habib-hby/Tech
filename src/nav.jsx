import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Text } from "./provider";
export default function NAV(){
   const {vall ,Smartwatch,Products,Earphone,Phone}=useContext(Text);
   let element=0;
   let [display,setdisplay]=useState("none");
   function show(){
    if(display==="none"){
    setdisplay("")
}else{
        setdisplay("none")
    
    }
    
   }
  vall.map((e)=>{
      element=element+1;
   })
const x=useRef(null)
    return(
        <div className="nav">
        <div className="top" ref={x}  style={{zIndex:"4"}}>
            <span className="Shoes">Tech</span>
            <div className="middel">
                <Link className="link x" to={"/home"} >home</Link>
                <Link className="link x" to={"/product"}>product</Link>
                <Link className="link x" onClick={()=>show()}>Categories</Link>
            </div>
            <div className="right"> 
                <Link className="link" to={"/person"}> <span class="material-symbols-outlined" style={{padding:"4px 0px 0px 0px "}}>person</span></Link>
                
                <button type="button" class="btn position-relative" style={{padding:"0px",margin:"0px",border:"none"}}>
<Link className="link" to={"/buy"}> <span class="material-symbols-outlined">shopping_cart</span></Link><span class="red position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary" style={{fontSize:"12px",padding:"5px",margin:"0px"}}>{element} <span class="visually-hidden">unread messages</span></span>
</button>

            </div>
        </div>
        <div className="buttom" style={{display:display}}>
        <Link className="link" to={"/product"} onClick={()=>Products()}>All</Link>
        <Link className="link" to={"/product"} onClick={()=>Phone()}>phone</Link>
        <Link className="link" to={"/product"} onClick={()=>Earphone()}>earphone</Link>
        <Link className="link" to={"/product"} onClick={()=>Smartwatch()}>Smart watch</Link>
        </div>
        </div>
    );
}