import React, { useState, useRef } from "react";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BrowserRouter, Routes, Route, Link,NavLink,useNavigate  } from 'react-router-dom'

function Admin (props){ 
  const token = localStorage.getItem('token')
  var conntent
  if (!token) {
    // statement
    return (<h1>Vui lòng đăng nhập để tiếp tục</h1>)
  }else{

    fetch(`https://furniture.thaylongdeptrai.dev/api/users`,{
      method: "get",
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`}
      })
    .then((res) => res.json()).then((data)=>{
      console.log(data)

    })


    return (
      <div>Đây là admin</div>

      );  


  }


};

export default Admin;
