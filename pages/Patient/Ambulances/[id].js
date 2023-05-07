import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Sessioncheck from '@/pages/components/sessioncheck';
import Navigation from '@/pages/components/navigation';


export default function id({data}) {
  
  console.log(data);
  return (
    <div>

<Sessioncheck/>
<Navigation/>
<div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-4">
        <div class="photo-wrapper p-2">
            <img class="w-36 h-40 rounded-full mx-auto" src={`http://localhost:3000/ambulance/getimage/${data.profilePic}`}/>
            
 
</div>
        <div class="p-32">
            <h3 class="text text-xl text-gray-900 font-medium leading-8">{data.driverName}</h3>
            <div class="text text-gray-400 text-xs font-semibold">
                <p>{data.rent}</p>
            </div>
            <table class="text-xs my-5">
                <tbody><tr>
                    <td >Location:</td>
                    <td >{data.location}</td>
                </tr>
                <tr>
                    <td >Phone:</td>
                    <td >{data.phone}</td>
                </tr>
                
            </tbody></table>

           

        </div>
    </div>
</div>

</div>



      
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
