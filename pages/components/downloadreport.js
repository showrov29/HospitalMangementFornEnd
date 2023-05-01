import axios from 'axios'
import React from 'react'

export default function DownloadReport(props) {

    console.log(props.name);

    axios.get(`http://localhost:3000/report/getreport/${props.name}`)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })

  return (
    <div>
      
    </div>
  )
}
