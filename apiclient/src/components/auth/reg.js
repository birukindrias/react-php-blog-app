import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user_actions } from "../../store/userSlice";

export default function Reg() {
    const navigate = useNavigate();
    let dispatch = useDispatch();
    let user = useSelector((state) => state.user_slice.user);
    let signin = async (user) => {
        await dispatch(
            user_actions.sign_user(user)

        )
        navigate('/home');

    }
    let username = React.useRef()
    let email = React.useRef()
    let lastname = React.useRef()
    let pass = React.useRef()

    // let input = 
    //     {
    //         let firstname: username,
    //         let lastname: lastname.current.value,
    //         let email: email.current.value,
    //         let password: pass.current.value
    //     }

    // let input = ()=>{
    //     return 
    //     {
    //         firstname= username,
    //         lastname= lastname.current.value,
    //         email= email.current.value,
    //         password= pass.current.value
    //     }
    // }
    
    const Regester =

        async () => {
            console.log( {
                firstname: username.current.value,
                lastname: lastname.current.value,
                email: email.current.value,
                password: pass.current.value
            });
            await fetch('http://localhost:8080/api/v1/createuser', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        firstname: username.current.value,
                        lastname: lastname.current.value,
                        email: email.current.value,
                        password: pass.current.value
                    }
                )
                ,
                headers: {
                    "Content-Type": "application/json",
                    'Accept': "application/json",
                },
            }).then(res => res.json()).then(res => {
                signin(res.data)
                console.log('token' + localStorage.getItem('itoken'))
                // user = res.data;
            });
            // console.log(user.token);
        }
    return <>
        <input ref={username} type="username" name="username" id="" />
        <input ref={lastname} type="lastname" name="lastname" id="" />
        <input ref={email} type="email" name="email" id="" />
        <input ref={pass} type="password" name="pass" id="" />
        <button onClick={() => {
            Regester()
        }}>Register</button>
    </>
}