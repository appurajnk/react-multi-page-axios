import React, {useEffect } from 'react';
import DashboardClient from "api/Clients/DashboardClient";

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
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
};
  
export default Home;