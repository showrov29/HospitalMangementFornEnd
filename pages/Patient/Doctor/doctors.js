// import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const axios=require('axios').default;
import Link from 'next/link';
import Navigation from '../../components/navigation'
import Sessioncheck from '../../components/sessioncheck';
import Card from '../../components/card';

export default function doctors({data}) {

  return (
    <div class="p-4 sm:ml-64 flex space-x-4">

<Sessioncheck/>
<Navigation/>



{ data&& data.map((item) => {
                
               return(
                <Card data={item}/>
                
               )
              })}
  


    </div>
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
