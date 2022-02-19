import React, {useEffect } from 'react';
import DashboardClient from "api/Clients/DashboardClient";
import "./index.module.css"
const Home = () => {

  useEffect(() => {

    getUserData();
   
    
  });



  const getUserData = async () => 
  {
    const response =await DashboardClient.getUserData()
    console.log("Appu",response.data)

  }


  return (
<>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet"/>

<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet"></link>
<section className="vh-100">
  <div className="container-fluid h-custom" style={{height: "90%"}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
        

        

          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
   
          </div>


         

    
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style={{paddingLeft:"2.5rem", paddingRight: " 2.5rem"}}>Create Profile</button>
         
          </div>

        </form>
      </div>
    </div>
  </div>
  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>

   
  </div>
</section>

</>
  );
};
  
export default Home;