import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import axios from 'axios';
import Navigation from '@/pages/components/navigation';
import NavBar from '@/pages/components/navBar';
import Sessioncheck from '@/pages/components/sessioncheck';



export default function doctor({data}) {

  return (
    <div class=" ">
      <Sessioncheck/>
      <Navigation/>
      <NavBar/>





<div class=" px-80 py-12 h-5/6 w-full">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src={`http://localhost:3000/doctor/getimage/${data.profilePic}`}/>
            
 
</div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{data.name}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>{data.designation}</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">BMDC ID:</td>
                    <td class="px-2 py-2">{data.bmdc_reg_no}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Speciality:</td>
                    <td class="px-2 py-2">{data.specialist}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Fees:</td>
                    <td class="px-2 py-2">{data.fees}</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href={`Appointment/${data.id}`}>Take Appointment</a>
            </div>

        </div>
    </div>
</div>

</div>

    </div>
  )
}



export async function getServerSideProps(context) {
  const {doctorId}=context.query;
  // console.log(doctorId);
  
 
  try {
  const response = await axios.get(`http://localhost:3000/doctor/${doctorId}`);
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

