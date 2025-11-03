import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ABOUT from "./about";
import { useRef, useState } from "react";

export default function Main() {
  const [display, setdisplay] = useState({
    explor: "",
    details: "none",
  });
  const animation=useRef(null)
  return (
    <>
      <div className="home">
        <div className="left" style={{ display: display.explor }}>
          <span className="name">tech products</span>
          <span style={{ color: "#F9F3EF" }}>
           tech products phone earphone smartWatch
          </span>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>{
            animation.current.className="show animation"
                setdisplay({ explor: "none", details: "" })
                }
            } 
          >
            details
          </button>
        </div>
        <div className="show" ref={animation} style={{ display: display.details }}>
          <div className="leftSide">
            <div className="name"> <p>tech</p>products </div>
            <span>iPhone: Powerful, sleek, and smart — everything in one device.
Earphones: Clear sound, wireless comfort, all day long.
Smart Watch: Track health, stay connected, in style.

</span>
            <Link className="link btn btn-outline-primary" to={"/log"}>
              log in
            </Link>
          </div>
          <div className="img">
            <img
              src={`${process.env.PUBLIC_URL}/tech/iphone12.jpg`}
              alt="iPhone 12"
            />
            <img
              src={`${process.env.PUBLIC_URL}/tech/head.jpg`}
              alt="iPhone 12"
            />
            <img
              src={`${process.env.PUBLIC_URL}/tech/black.jpg`}
              alt="iPhone 12"
            />
          </div>
        </div>
      </div>
      <div className="productsMain">
        <div className="phone">
          <div className="left">
            <div>
              <h3>iphone product</h3>
              <p>iphon apple product in e-commers</p>
              <Link className="link btn btn-outline-primary" to={"/log"}>
                log in
              </Link>
            </div>
          </div>
          <div className="right">
            <img
              src={`${process.env.PUBLIC_URL}/tech/iphone12.jpg`}
              alt="iPhone 12"
            />
          </div>
        </div>
        <div className="wireless">
          <div className="left">
            <div>
              <h3>head product</h3>
              <p>head apple product in e-commers</p>
              <Link className="link btn btn-outline-primary" to={"/log"}>
                log in
              </Link>
            </div>
          </div>
          <div className="right">
            <img
              src={`${process.env.PUBLIC_URL}/tech/head.jpg`}
              alt="iPhone 12"
            />
          </div>
        </div>
      </div>
      <ABOUT />
    </>
  );
}
