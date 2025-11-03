import { useContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Text } from "./provider";
import ABOUT from "./about";

export default function PRODUCT() {
  const { add, phone, products, earphone, smartwatch } = useContext(Text);
  const [alert, setalert] = useState("none");

  function click() {
    setalert("flex");
    setTimeout(() => {
      setalert("none");
    }, 700);
  }
  let photo = [
    { photo: "/tech/black.jpg", price: "120", name: "black smart watch" },
    { photo: "/tech/head.jpg", price: "110", name: "blackEarphoe" },
    { photo: "/tech/ipad2018.jpg", price: "110", name: "ipad2018" },
    { photo: "/tech/iphone12.jpg", price: "110", name: "iphone12" },
    { photo: "/tech/iphone13-.jpg", price: "110", name: "iphone13" },
    { photo: "/tech/iphone13.jpg", price: "110", name: "iphone13" },
    { photo: "/tech/orange.jpg", price: "110", name: "orangeSmartwatch" },
    { photo: "/tech/phone.jpg", price: "110", name: "iphone" },
    { photo: "/tech/SmartWatches.jpg", price: "110", name: "GraySmartWatch " },
    { photo: "/tech/watch.jpg", price: "110", name: "white Smart Watch" },
    { photo: "/tech/white.jpg", price: "110", Aname: "white Smart Watch" },
    { photo: "/tech/wir.jpg", price: "110", name: "white Earphone" },
    { photo: "/tech/wir2.jpg", price: "110", name: "whiteEarphone" },
    { photo: "/tech/wir1.jpg", price: "110", name: "black Earphone" },
    { photo: "/tech/wir3.jpg", price: "110", name: "blue Earphone" },
    { photo: "/tech/wireless.jpg", price: "110", name: "black Earphone" },
  ];
  let photo4 = [
    { photo: "/tech/black.jpg", price: "120", name: "black smart watch" },
    { photo: "/tech/orange.jpg", price: "110", name: "orangeSmartwatch" },
    { photo: "/tech/SmartWatches.jpg", price: "110", name: "GraySmartWatch " },
    { photo: "/tech/watch.jpg", price: "110", name: "white Smart Watch" },
    { photo: "/tech/white.jpg", price: "110", Aname: "white Smart Watch" },
  ];
  let photo3 = [
    { photo: "/tech/head.jpg", price: "110", name: "blackEarphoe" },
    { photo: "/tech/wir.jpg", price: "110", name: "white Earphone" },
    { photo: "/tech/wir2.jpg", price: "110", name: "whiteEarphone" },
    { photo: "/tech/wir1.jpg", price: "110", name: "black Earphone" },
    { photo: "/tech/wir3.jpg", price: "110", name: "blue Earphone" },
    { photo: "/tech/wireless.jpg", price: "110", name: "black Earphone" },
  ];
  let photo2 = [
    { photo: "/tech/ipad2018.jpg", price: "110", name: "ipad2018" },
    { photo: "/tech/iphone12.jpg", price: "110", name: "iphone12" },
    { photo: "/tech/iphone13-.jpg", price: "110", name: "iphone13" },
    { photo: "/tech/iphone13.jpg", price: "110", name: "iphone13" },
    { photo: "/tech/phone.jpg", price: "110", name: "iphone" },
  ];
  let show4 = photo4.map((e) => {
    return (
      <div className="product">
        <img src={`${process.env.PUBLIC_URL}${e.photo}`} alt="" />
        <span>{e.name}</span>
        <span style={{ color: "#3339" }}>price :{e.price}$</span>
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
        <button
          type="button"
          className="btn btn-outline-primary blue"
          onClick={() => {
            add(e.name, e.price, e.photo);
            click();
          }}
        >
          add to chart
        </button>
      </div>
    );
  });
  let show3 = photo3.map((e) => {
    return (
      <div className="product">
        <img src={`${process.env.PUBLIC_URL}${e.photo}`} alt="" />
        <span>{e.name}</span>
        <span style={{ color: "#3339" }}>price :{e.price}$</span>
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
        <button
          type="button"
          className="btn btn-outline-primary blue"
          onClick={() => {
            add(e.name, e.price, e.photo);
            click();
          }}
        >
          add to chart
        </button>
      </div>
    );
  });
  let show2 = photo2.map((e) => {
    return (
      <div className="product">
        <img src={`${process.env.PUBLIC_URL}${e.photo}`} alt="" />
        <span>{e.name}</span>
        <span style={{ color: "#3339" }}>price :{e.price}$</span>
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
        <button
          type="button"
          className="btn btn-outline-primary blue"
          onClick={() => {
            add(e.name, e.price, e.photo);
            click();
          }}
        >
          add to chart
        </button>
      </div>
    );
  });
  let show = photo.map((e) => {
    return (
      <div className="product">
        <img src={`${process.env.PUBLIC_URL}${e.photo}`} alt="" />
        <span>{e.name}</span>
        <span style={{ color: "#3339" }}>price :{e.price}$</span>
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
        <button
          type="button"
          className="btn btn-outline-primary blue"
          onClick={() => {
            add(e.name, e.price, e.photo);
            click();
          }}
        >
          add to chart
        </button>
      </div>
    );
  });
  return (
    <>
      <div className="products" style={{ display: products }}>
        <div class="alert alert-dark" style={{ display: alert }} role="alert">
          Product was Added
        </div>

        {show}
      </div>
      <div className="products" style={{ display: phone }}>
        <div class="alert alert-dark" style={{ display: alert }} role="alert">
          Product was Added
        </div>

        {show2}
      </div>
      <div className="products" style={{ display: earphone }}>
        <div class="alert alert-dark" style={{ display: alert }} role="alert">
          Product was Added
        </div>

        {show3}
      </div>
      <div className="products" style={{ display: smartwatch }}>
        <div class="alert alert-dark" style={{ display: alert }} role="alert">
          Product was Added
        </div>

        {show4}
      </div>
      <ABOUT />
    </>
  );
}
