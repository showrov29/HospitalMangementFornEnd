import React from 'react'
import { useRouter } from 'next/router'

export default function BookAmbulance({data}) {
    const router=useRouter();
    console.log(router.query);
    const {book}=router.query;
  return (
    <div>
      <h1>Book Ambulance : {book}</h1>
    </div>
  )
}

// export async function getServerSideProps({query}) {

//   try {
//   const response = await axios.get('http://localhost:3000/ambulance/show'+book);
//   const data = await response.data;
//   console.log(data);

//   return {
//     props: {
//       data
//     }
//   };
  
//   } catch (error) {

//   return {
//     props: {
//       data: {status:"enter valid user id"}
//     }
//   };
// }
// }