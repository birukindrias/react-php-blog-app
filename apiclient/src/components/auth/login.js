import React from "react";

export default function Login (){
    let email = React.useRef()
    let pass = React.useRef()
    const login = ()=>{
        console.log(email.current.value + pass.current.value);
    }
    return <>
    <input ref={email} type="email" name="email" id="" />
    <input ref={pass} type="password" name="pass"  id="" />
    <button onClick={()=>{
        login()
    }}>login</button>
            </>
}