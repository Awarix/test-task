import React, {useState, useEffect}from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './experimentChart.css'



const ExperimentChart = () => {
  const [data,setData] = useState ([
  {
    name: 'A',
    one: 4000,
    two: 2400,
  },
  {
    name: 'B',
    one: 3000,
    two: 1398,
  }, 
])

//Эмулируем получение новой даты
const newData = () => {
  const addNewData = {
    one: Math.random()*(10000),
    two: Math.random()*(10000),
  }
  setData([...data, addNewData])
 
}

// Выводим необходимые данные в лог
const log = data.map(d => 
  <>
  <p>{`one:${d.one}`}</p>
  <p>{`two:${d.two}`}</p>
  </>
  )

  return (
    <div className='experiment-chart-con'>
    <div className='flex'>
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="one" stroke="#8884d8" />
    <Line type="monotone" dataKey="two" stroke="#82ca9d" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
  <code className='experiment-log'>{log}</code>
  </div>
  <button style={{alignSelf: "center"}} onClick={newData}>Get New Data</button>
  </div>
  )
}

export default ExperimentChart