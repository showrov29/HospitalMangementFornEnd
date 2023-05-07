import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// const axios=require('axios').default;
import Link from 'next/link';
import Navigation from '../../components/navigation'
import Sessioncheck from '../../components/sessioncheck';
import Card from '../../components/card';
import { Navbar } from 'react-bootstrap';
import NavBar from '@/pages/components/navBar';

export default function doctors({data}) {

  const [searchData,setSearchData]=useState([])
  const [fileterVal,setFilterVal]=useState('')

  const [doctors,setDoctors]=useState(null);
  useEffect(() => {
  
    setDoctors(data)
    setSearchData(data)
  },[]);
  
    const handleFilter=(e)=>{
      if(e.target.value==''){
        setDoctors(searchData)

      }
     
       else{ 
        
        const filterResult=  searchData.filter(item=>item.specialist.toLowerCase().includes(e.target.value.toLowerCase()))
          setDoctors(filterResult)
          console.log('file',filterResult);}
      
      
  
  }

  return (
    <>
    <NavBar/>
    <div class="p-4 sm:ml-64 flex space-x-4">

<Sessioncheck/>
<Navigation/>

<div class="px-14 w-3/4  absolute">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        </div>
        <input type="text" onChange={(e)=>handleFilter(e)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
        <br/>
<br/>
    </div>



{ doctors && doctors.map((item) => {
  
  return(
    <>
                
                <Card data={item}/>
                
                </>
               )
              })}
  


    </div>
</>
  )
}


export async function getServerSideProps() {
  
  try {
    const response = await axios.get('http://localhost:3000/doctor/alldoc');
    const data = await response.data;
    console.log(data);
    
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
