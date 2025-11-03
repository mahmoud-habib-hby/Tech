import React, {createContext, useEffect, useState} from "react";

export const Text = createContext();

export function TextProvider({ children }) {
  const d=JSON.parse(localStorage.getItem("data"))
  const data=JSON.parse(localStorage.getItem("d"))
  const [vall,setVal]=useState(d?d:[]);
  const [changename,setchangename]=useState("")
  const [changeemail,setchangeemail]=useState("")
 const [person,setperson]=useState(data?data:{});
 const [phone,setphone]=useState("none");
const [earphone,setearphone]=useState("none");
const [smartwatch,setSmartwatch]=useState("none");
const [products,setproducts]=useState("");
function Products(){
setSmartwatch("none");
setearphone("none");
setphone("none");
setproducts("")
}
function Phone(){
setSmartwatch("none");
setearphone("none");
setphone("");
setproducts("none")
}
function Earphone(){
setSmartwatch("none");
setearphone("");
setphone("none");
setproducts("none")
}
function Smartwatch(){
setSmartwatch("");
setearphone("none");
setphone("none");
setproducts("none")
}

 useEffect(()=>{

},[person])
function UPdataName() {
  let data=person;
  data.name=changename;
  setperson(data);
  localStorage.setItem("d",JSON.stringify(data));
}
function UPdataEmail() {
  let data=person;
  data.email=changeemail;
  setperson(data);
  localStorage.setItem("d",JSON.stringify(data));
}

 
 function Person(name,email){
      let data={
        name:name,
        email:email
      }
      setperson(data)
      localStorage.setItem("d",JSON.stringify(data))
 }


  function add(name ,price,photo){
    let va={
      name:name,
      price:price,
      id:Date.now(),
      photo:photo
    };
    const va2=[...vall,va];
    setVal(va2)
    localStorage.setItem("data",JSON.stringify(va2));
  }
  function delet(ide){
    const data=vall.filter((e)=>e.id!==ide);
    setVal(data)
    localStorage.setItem("data",JSON.stringify(data));
  }
  function buy(){
  let data=[]
    setVal(data)
    localStorage.setItem("data",JSON.stringify(data));
    
  }
  return (
    <Text.Provider value={{add,vall,setVal ,delet ,person,Person,buy ,setperson ,setchangename,setchangeemail ,UPdataEmail,UPdataName,changename,changeemail,phone,Phone,earphone,Earphone,products,Products,smartwatch,Smartwatch}}>
      {children}
    </Text.Provider>
  ); 
}
