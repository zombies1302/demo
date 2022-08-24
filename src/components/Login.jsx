import React, { useState, useRef } from "react";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BrowserRouter, Routes, Route, Link,NavLink,useNavigate  } from 'react-router-dom'

function Login (props){ 
  const refEmail = useRef('');
  const refPassword = useRef('');
  const navi = useNavigate();


  const loginEmail = (e)=>{
    let data = {
      "email":refEmail.current.value,
      "passWord": refPassword.current.value
    }
    
    fetch(`https://casestudy.cyberlearn.vn/api/Users/signin`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {'Content-Type':'application/json',
    }
  }).then((res) => res.json()).then(data => {   
    console.log(data)   
    let token = data.content.accessToken
    if (data.statusCode == 200) {
      // statement
      Notify.success("Đăng Nhập Thành Công")
      localStorage.setItem('token', token);
      navi('/admin');
    }else{
      Notify.failure("Vui lòng kiểu tra lại tên đăng nhập và mật khẩu!")
    }

  });
  



  
  // console.log(data)


}
return (
  <div className="container">
  <h1 className="text-center">Đăng Nhập</h1>
  <div className="col-6 m-auto">
  <label className="form-label" htmlFor="typeEmail" >Email</label>
  <input type="text" id="typeEmail" className="form-control" ref={refEmail}  />
  <label className="form-label" htmlFor="typeEmail">Mật Khẩu</label>
  <input type="email" id="typeEmail" className="form-control" ref={refPassword} />
  <div className="mt-4">
  <button className="btn btn-info mx-2" onClick={loginEmail} >Đăng Nhập</button>

  </div>
  </div>
  </div>
  );
};

export default Login;