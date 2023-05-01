import React from 'react'

export default function Presdetails({data}) {
  return (
    <div>
        <h1>Patient Name:{data.name}</h1>
        <h1>Patient Age:{data.age}</h1>
        <h1>Test:{data.test}</h1>
        <h1> Medicine:{data.medicine}</h1>
      
    </div>
  )
}



export async function getServerSideProps({ query }) {
    const inputValue = query.id;
    console.log(inputValue);
    try {
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