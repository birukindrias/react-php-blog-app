import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const redirect = (path) => {
    navigate(path)
  }
  return <>
    <nav>
      <p onClick={() => {
        redirect('/Home')
      }
      }>Home</p>

      <p onClick={() => {
        redirect('/blogs')
      }
      }>blogs</p>
      <p onClick={() => {
        redirect('/Profile')
      }
      }>profile</p>
         {/* <p onClick={() => {
        redirect('/Profile')
      }
      }>logout</p> */}
    </nav>
  </>
}