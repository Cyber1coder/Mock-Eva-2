import React, { useCallback, useState } from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import FleetCard from './FleetCard';

const Admin = () => {
    function Admin(){
        const[fleet,setFleet]=useState([]);

        const addFleet = (data) => {
            setFleet([...fleet,data]);
        };

        const updateDriver=useCallback(id) => {
            const name = prompt("Enter new driver name");
            if(!name || name() === "")
                return;

            setFleet((prev)=>)

        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Admin
