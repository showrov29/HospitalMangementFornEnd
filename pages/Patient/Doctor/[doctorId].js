import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import axios from 'axios';
import Navigation from '@/pages/components/navigation';



export default function doctor({data}) {

  return (
    <div class="p-4 sm:ml-64">
      <Navigation/>

        <h1>Name: {data.name}</h1>
        <h6>Fees: {data.fees}</h6>
        <Link href={`Appointment/${data.id}`} >Take Appointment</Link>
      
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

