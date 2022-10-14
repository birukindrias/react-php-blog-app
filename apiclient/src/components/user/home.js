import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
    let userdata = useSelector((state) => state.user_slice.user);
  console.log( userdata);
  console.log( 'userdata');
    let user = useSelector(state => state.user_slice.user)
    console.log(user.user[0].id);
    let body = React.useRef();
    
    const post = async () => {
        await fetch('http://localhost:8080/api/v1/createpost', {
            method: "POST",
            body: JSON.stringify({
                user_id: user.user[0].user_id,
                post: body.current.value
            })
            , headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then(res => res.json()).then(res => console.log(res))

    }
    
    return <>
blogs followers 
<h1>create blog</h1>
<input ref={body} type="text" name="body" id="" /><button onClick={post}>blog</button>

    </>


}