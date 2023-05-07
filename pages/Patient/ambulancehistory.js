import React from 'react'
import Navigation from '../components/navigation'

export default function ambulancehistory() {
  return (
    <div>
      <Navigation/>
      
    </div>
  )
}




export async function getServerSideProps() {
 
  try {
  const response = await axios.get('http://localhost:3000/ambulance/available');
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

function test(){
  
}
  