import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const [uservalues, setuserPro] = useState([]);
  let userdata = useSelector((state) => state.user_slice.user);
  let id = userdata.user[0].user_id;
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/user?user_id=" + id)
      .then((res) => res.json())
      .then((res) => {
       let cov = Object.values(res.data[0]);
       console.log(cov);
        setuserPro(cov);
      });
     
  }, [uservalues, id]);
  console.log("uservalues");
  console.log(uservalues);
  var result = Object.keys(uservalues).map((key) => [Number(key), uservalues[key]]);
  console.log(result);
  console.log(Array.isArray(result));

  return (
    <>
      {result &&
        result.map(
          (e) => {
            <div className="user">{e}</div>;
          }
          // teh secret
          // peaceful WebGLShaderPrecisionFormatground hog day
        )}
      <div className="user">useria</div>
    </>
  );
}
