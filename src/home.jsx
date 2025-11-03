
import { Link } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HOMME(){
    return(
    <>

    <div className="home">
        <div className="left">
          <span className="name">tech products</span>
          <span style={{ color: "#F9F3EF" }}>
           tech products phone earphone smartWatch
          </span>
            <Link className="link btn btn-outline-primary" to={"/product"}>product</Link>
        </div>
    </div>
    </>
    );   
}