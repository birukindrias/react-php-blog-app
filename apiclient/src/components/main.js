import { useEffect } from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom"

export default function Main (){
    const navigate = useNavigate();

    let user = useSelector((state) => state.user_slice.user);

    return <>
    main</>
}