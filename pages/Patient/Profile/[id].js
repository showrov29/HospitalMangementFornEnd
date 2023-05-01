import React from 'react'
import Navigation from '../../components/navigation'
import axios from 'axios';
import { useEffect } from 'react';
import Link from 'next/link';
import Profilepicup from '@/pages/components/profilepicup';

export default function Profile({data}) {
  

  return (
    <div>
      <Navigation/>
      {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-4 rounded-lg shadow-lg bg-white">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile picture"
            className="rounded-full w-24 h-24"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold">First Name: {data.firstName}</h1>
            <p className="text-gray-500">Last Name: {data.lastName} </p>
            <p className="text-gray-500">Date Of Birth: {data.dob} </p>
            <p className="text-gray-500">Email: {data.email} </p>
            <p className="text-gray-500">Phone: {data.phone} </p>

            <Link href={`../editprofile`} >Eid Profile</Link>
          </div>
        </div>
       
      
      </div>
    </div> */}




<div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src={`http://localhost:3000/patient/getimage/${data.profilePic}`}/>
            
 
</div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{data.firstName}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>{data.lastName}</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Date of Birth</td>
                    <td class="px-2 py-2">{data.dob}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{data.phone}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{data.email}</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="../editprofile">Edit Profile</a>
            </div>

        </div>
    </div>
</div>

</div>
      
    </div>
  )
}



export async function getServerSideProps(context) {
  const {id}=context.query;


 
  try {
  const response = await axios.get(`http://localhost:3000/patient/profile/${id}`);
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


   
  
  




