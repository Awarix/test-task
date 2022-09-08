import React, { useState, useEffect } from 'react'
import './dashboard.css'

const Dashboard = () => {
  const [device, setDevice] = useState (
    {
      name: 'Shrink ray',
      temperature: "110C",
      On: true,
      voltage: "666V",
    })
  const [anyDevice, setAnyDevice] = useState (true)

useEffect(() => {
    console.log("Device changed")
}, [device])

const newDevice = () => {
  setDevice({...device, name:"Slime Creator", On:false})
}

  return (
    <div className='container'>
    {anyDevice && 
    <div className='dashboard-container'>
      <h1 className='dashboard-device-name'>{device.name}</h1>
      <div className='dashboard-device-condition'>
        {device.On ? 
        <p className='on'>On</p> :
        <p className='off'>Off</p>  
      }
      </div>
      {device.On && 
      <div className='dashboard-device-temperature'>
        Temperature: {device.temperature}
      </div>}
      {device.On && 
      <div className='dashboard-device-voltage'>
        Voltage: {device.voltage}
      </div>}
      <button onClick={newDevice}>new Device</button>
    </div>}
    </div>
  )
}

export default Dashboard