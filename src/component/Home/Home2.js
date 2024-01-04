import React, { useState,useEffect } from "react";

function Home2(){
    const [name,setName]=useState("");
    useEffect(()=>{
        let person = prompt("Please enter your name", "Yashvant");
        if (person != null) {
          setName("Hello " + person + "! How are you today? Please go to Add-Task button and add your today task.");
        }
    },[])
    return(
<div className="home2_container">
<h1 className="home_name">Welcome {name}</h1>
</div>
    )
}
export default Home2;

