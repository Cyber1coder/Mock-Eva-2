import React from 'react'

function FleetCard({data,updateDriver,toggleAvailability,deleteVehicle}) {

  return (
    <div>
      <p>Vehicle:{data.vehicle}</p>
      <p>Driver:{data.driver}</p>
      <p>Category:{data.category}</p>
      <p>Status:{data.status}</p>

      <button onClick={()=>updateDriver(data.id)}>Update Driver</button>
      <button onClick={()=>toggleAvailability(data.id)}>Change Status</button>
      <button onClick={()=>deleteVehicle(data.id)}>Delete</button>
    </div>
  )
}

export default React.memo(FleetCard)
