import React, { useState, useRef, useEffect, useCallback } from 'react'
import ExperimentChart from '../../components/experimentChart/ExperimentChart'
import './Experiment.css'
import ExperimentTable from '../../components/ExperimentTable'


const Experiment = () => {
  const [isTestStart, setisTestStart] = useState (false)
  return (
    <div className='experiment-holder'>
      <div className='experiment-data'>
        {isTestStart ? <ExperimentChart/> : "no data"}
      </div>
      <div className='experiment-table'>{isTestStart ? <ExperimentTable /> : "no data"}</div>
      <div className='experiment-button'>
        {!isTestStart && <button className='experiment-start-button'
         onClick={() => setisTestStart(true)}>Start Experiment</button>}
         {isTestStart && <button className='experiment-stop-button'
         onClick={() => setisTestStart(false)}>Stop Experiment</button>}
        </div>
    </div>
  )
}

export default Experiment