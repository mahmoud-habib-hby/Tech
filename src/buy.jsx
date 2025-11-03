import { useContext, useEffect, useRef, useState } from "react";
import { Text } from "./provider";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function BUY() {
  const { vall, delet } = useContext(Text);
  const [center, setcenter] = useState("none");
  let number = 0;
  let element = 0;
  vall.map((e) => {
    number = Number(e.price) + number;
    element = element + 1;
  });
  let show = vall.map((e) => {
    return (
      <div className="product">
        <img src={`${process.env.PUBLIC_URL}${e.photo}`} alt="000" />
        <span>{e.name}</span>
        <span>{e.price}$</span>
        <span>
          5
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </span>
        <button class="btn btn-outline-danger" onClick={() => delet(e.id)}>
          delet
        </button>
      </div>
    );
  });
  function MONEY() {
    const { vall, buy } = useContext(Text);
    let number = 0;
    vall.map((e) => {
      number = number + Number(e.price);
    });
    return (
      <div
        className="position-absolute top-50 start-50 translate-middle center"
        style={{ display: center }}
      >
        <div>
          <span>
            <button
              className="btn btn-danger"
              onClick={() => {
                setcenter("none");
              }}
            >
              back
            </button>
          </span>
          <p>Checkout Page</p>
          <p>price = {number}$</p>
          <div className="money">
            <input type="text" placeholder="name" className="form-control" />
            <input type="email" placeholder="email" className="form-control" />
            <input type="number" placeholder="phone" className="form-control" />
            <input type="text" placeholder="Country" className="form-control" />
            <input
              type="number"
              placeholder="Card Number"
              className="form-control"
            />
            <input
              type="number"
              placeholder="Expiry Date"
              className="form-control"
            />
            <input
              type="number"
              placeholder="CVV Code"
              className="form-control"
            />
            <button
              class="btn btn-success"
              onClick={() => {
                buy();
                setcenter("none");
              }}
            >
              buy
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="buy">
        <MONEY />
        <div className="content">{show}</div>
        <div className="total">
        <p className="total">TOTAL</p>
        <p>Total Element :{element}</p>
        <p>Total Salary :{number}$</p>
        
        <button
          className="btn btn-outline-success"
          onClick={() => {
              setcenter("");
            }}
            >
          {" "}
          buy All
        </button>
            </div>
      </div>
    </>
  );
}
