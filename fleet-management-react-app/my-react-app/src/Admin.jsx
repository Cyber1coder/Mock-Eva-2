import React, { useCallback, useState } from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import FleetCard from './FleetCard';

const Admin = () => {
    function Admin(){
        const[fleet,setFleet]=useState([
            {id:1,driver:"Ram",available:true},
            {id:2,driver:"Sham",available:false},
        ]);

        function deleteVehicle(){

        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Admin
