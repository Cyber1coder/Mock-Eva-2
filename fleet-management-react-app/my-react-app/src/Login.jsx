import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const[email,setEmail]=useState("")
      const[password,setPass]=useState("");
      const navigate = useNavigate();

      useEffect(()=> {
        document.getElementById("email").focus()
      },[]);

      function handleLogin(){
        if(email==="admin@gmail.com" && password === "admin1234"){
            localStorage.setItem("auth" ,"true")
            alert("Login Success!")
            navigate("/admin")
        }
        else{
            alert("Wrong email or password");
        }
      }
  return (
    <div>
      <input id = "email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input id = "password" placeholder='Enter Password' value={password} onChange={(e)=>setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

  </div>
  )
}

export default Login
