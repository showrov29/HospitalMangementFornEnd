import axios from 'axios'
import React from 'react'
import DownloadReport from './downloadreport'

export default function Report(props) {


    function handleClick(){
        
            console.log(props.data.report);
           <DownloadReport name={props.data.report} />
        
    }

  return (
    <div>
      <h1>Test Name: {props.data.test_name}</h1>
      <h1>Test Date: {props.data.date}</h1>
      <h1>Delivary Date: {props.data.delivery_date}</h1>
      <button  onClick={handleClick}>Download</button>
    </div>
  )
}
