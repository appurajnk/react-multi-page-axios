import React, {useEffect } from 'react';
import DashboardClient from "api/Clients/DashboardClient";
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "./index.module.css";

const Home = () => {
  let [credential, setCredentailState] = React.useState("");
  let [username, setUserName] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    
  });

  const loginValidate = async () => 
  {
 

    const response =await DashboardClient.validateUser(credential)

    if(response!=undefined && response.data.response.lastname!=undefined)
    {
     
      setUserName(response.data.response.lastname)
      navigate("/dashboard");
    }
    else{
      console.log("Invalid credentials");
      alert("Invalid credentials");
    }
   
    

  }
const setCredentails = async (e) => 
{
  console.log(e.target.value);
  setCredentailState(e.target.value);

}

  return (
<>

<section className="vh-100">
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
        <div class="row flex-grow">
          <div class="col-lg-6 d-flex align-items-center justify-content-center">
            <div class="auth-form-transparent text-left p-3">
              <div class="brand-logo">
                <img src="C:\Users\nithe\OneDrive\Pictures" alt="logo"/>
              </div>
              <h4>Welcome back!</h4>
              <h6 class="font-weight-light">Happy to see you again!</h6>
              <form class="pt-3">
                <div class="form-group">
                  <label for="exampleInputEmail">Username</label>
                  <div class="input-group">
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Ented a Valid User ID" onChange={(e)=>setCredentails(e)} />                 
                  </div>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input"/>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
                <div class="my-3">
                       <button type="button" className="btn btn-primary btn-lg"
                      style={{paddingLeft:"2.5rem", paddingRight: " 2.5rem"}}  onClick={(e) => loginValidate()}>Login</button>              
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Don't have an account? <a href="register-2.html" class="text-primary">Create</a>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 login-half-bg d-flex flex-row">
            <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2021  All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  );
};
  
export default Home;



