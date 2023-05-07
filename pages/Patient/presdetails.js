import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Sessioncheck from '../components/sessioncheck';
import Navigation from '../components/navigation';
import NavBar from '../components/navBar';

export default function Presdetails({data}) {



  const [pdfURL, setPDFURL] = useState('');
    function handleClick(pdf){
      console.log(pdf);
        
      axios.get(`http://localhost:3000/prescription/getprescription/${pdf}`,

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
        a.download = 'Prescription.pdf'; // set the desired filename here
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch(error => console.error(error));
        
    }

  console.log(data);
  return (
    <>
    <Sessioncheck/>
    <Navigation/>
    <NavBar/>
    <div className=' pl-8 box-border shadow h-64 w-96 p-4 border-4 rounded-lg hover:bg-gray-100 text-left mx-auto  ' >
        <h1 class=" px-8 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >Patient Name:{data.patientName}</h1>
        <h5 className='px-10'>Patient Age:{data.patientAge}</h5>
        <h5 className='px-10'>Test:{data.test}</h5>
        <h5 className='px-10'> Medicine:{data.medicine}</h5>
        <button class=" px-12 sm:ml-8 bg-gray-300 mt-2.5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={()=>{handleClick(data.pdf)}}>
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span  >Download</span>
        </button>
      
    </div>
    </>
  )
}



export async function getServerSideProps({ query }) {
    const inputValue = query.id;
    
    try {
      console.log(inputValue);
    const response = await axios.get('http://localhost:3000/prescription/show/'+inputValue);
    const data = await response.data;
  
    return {
      props: {
        data
      }
    };
    
    } catch (error) {
  
    return {
      props: {
        data: {status:"enter valid user id"}
      }
    };
  }
  }