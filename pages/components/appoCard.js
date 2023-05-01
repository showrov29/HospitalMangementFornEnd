import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

export default function AppoCard({data}) {
    console.log(data);
    // // const aid=query.aid;
    // console.log(query);
    // const [doctor,setDoctor]=useState(null)
    // const [details,setDetails]=useState(null)
    // useEffect(() => {


    //     axios.get(`http://localhost:3000/appointment/show/${aid}`)
    //     .then(response => {
    //       console.log(response.data);
    //       setDetails(response.data)

    //       axios.get(`http://localhost:300/doctor/${details.DoctorId}`)
    //       .then(res=>{
    //        setDoctor(res.data )
    //       })
    //       .catch(err=>{
    //        console.log(err);
    //       })


    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
        
      

      
    // }, []);

  return (
    <div>
      
      <div className="flex ">
      <div className="p-4 rounded-lg h-72 w-80 shadow-lg bg-blue-400">
        <div className="">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile picture"
            className="rounded-full w-24 h-24 "
          />
          <div className="ml-4">
            {/* <h1 className="text-2xl font-bold"> Name: {details.name}</h1>
            <p className="text-rose-900">Age: {details.age} </p>
            <p className="text-rose-900">Date: {details.date} </p>
            <p className="text-rose-900">Doctor: {doctor.name} </p>
            <p className="text-rose-900">Status: {details.status} </p> */}
            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href={`/Patient/Doctor/${1}`}> Details</a>
            </div>

          
          </div>
        </div>
       
      
      </div>
    </div>
      
    </div>
  )
}




export async function getServerSideProps({ query }) {
    console.log(query);
    // const inputValue = query.id;
    // console.log(inputValue);
    try {
    const response = await axios.get(`http://localhost:3000/appointment/show/${aid}`);
    const details = await response.data;
    const res = await axios.get(`http://localhost:300/doctor/${details.DoctorId}`)
    const doctor=await res.data;

  
    return {
      props: {
        details,doctor
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