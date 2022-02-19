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
    <body>
  <table>
    <tr>
      <td>
        <div class="Rectangle-465">
        <img src="/home/dell/Documents/photos/mifix.jpeg" class="Group-342"/>
        <br><br>
        <span class="Enter-Login-details">

        <span class="text-style-1">Enter</span>

        <span class="text-style-2"></span>
        <br/>

        Login details

        </span>
      <form>
        <input type="text" class="Enter-employee-id" placeholder="Enter employee id"/>
      </form>
      <span class="Forgot-Employee-id">

    Forgot Employee id?
  
  </span>
  <div class="Rectangle-57">
    

<a href="/home/dell/Documents/dev/AdminLTE-master/new/newproduct.html"><button type="button" class="button" onclick="this.classList.toggle('button--loading')">
  <span class="button__text"></span>
</button></a>


    
  </div>
</td> 
   <td>
</div>
<div class="Image">
  <img src="/home/dell/Documents/dev/index.jpeg"/>
  <p>End-End Transperancy</p>
</div>
</td>
</tr>
</table>
<style>


.button {
  position: relative;
  padding: 8px 16px;
  background: #009579;
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
}

.button:active {
  background: #007a63;
}

.button__text {
  font: bold 20px "Quicksand", san-serif;
  color: #ffffff;
  transition: all 0.2s;
}

.button--loading .button__text {
  visibility: hidden;
  opacity: 0;
}

.button--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}


</style>

</body>
    </div>
  );
};
  
export default Home;