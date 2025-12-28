import React from 'react'

function FleetCard({data,onDelete,onToggle}) {

  return (
    <div>
      <h3>{data.driver}</h3>
      <p>{data.available ? "available":"not-available"}</p>

      <button onClick={()=>onToggle(data.id)}>Toggle</button>
      <button onClick={()=>onDelete(data.id)}>Delete</button>

    </div>
  )
}

export default React.memo(FleetCard)
