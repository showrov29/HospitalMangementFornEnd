import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import DownloadReport from './downloadreport'
import { headers } from '@/next.config';
import Footer from './footer';

export default function Report(props) {

  const [pdfURL, setPDFURL] = useState('');
    function handleClick(report){
      console.log(report);
        
      axios.get(`http://localhost:3000/report/getreport/${report}`,

    {
      responseType: 'arraybuffer',
      headers:{
        'Content-Type': 'application/pdf'
      }
    }
      )
      .then(response => {
        console.log(response);
        const blob = new Blob([response.data], { type: 'application/pdf' });
        
        const pdfURL = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = pdfURL;
        a.download = 'Report.pdf'; // set the desired filename here
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch(error => console.error(error));
        
    }

    

  return (
    <>
   
    <div  className='p-2 sm:ml-32 flex space-x-4'>
 
<div class=" items-center p-8  sm:ml-64 block max-w-sm  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Test Name: {props.data.test_name} </h5>
    
      <h1 className='sm:ml-8'>Test Date: {props.data.date}</h1>
      <h1 className='sm:ml-8'>Delivary Date: {props.data.delivery_date}</h1>
      <button onClick={()=>(handleClick(props.data.report))} class=" sm:ml-8 bg-gray-300 mt-2.5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span >Download</span>
    </button>
      
</div>


    </div>

    </>
  )
}
