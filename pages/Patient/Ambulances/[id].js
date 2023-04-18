import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';


export default function id({data}) {
  
  console.log(data);
  return (
    <div>
      <h1>Driver : {data.driverName}</h1>
      <h6>Rent : {data.rent}</h6>
      <h6>Phone : {data.phone}</h6>
      <h6>Location : {data.location}</h6>
      <Link href={`show/${data.id}`} >Book Ambulance</Link>
     
      
    </div>
  )
}



export async function getServerSideProps(context) {
  // const router=useRouter();
  // console.log(router.query);
   const {id}=context.query;


  try {
  const response = await axios.get(`http://localhost:3000/ambulance/show/${id}`);
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
