import React from 'react'
import axios from 'axios';
import Navigation from '../components/navigation'
import NavBar from '../components/navBar';
import Sessioncheck from '../components/sessioncheck';

export default function bloodbank({data}) {

  return (
    <div >
      <Sessioncheck/>
      <Navigation/>
      <NavBar/>


      <div class="w-3/4 mx-auto p-4 sm:ml-64">
        <div class="bg-gray-50 shadow-md rounded my-6">    
<table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Blood Group</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Quantity </th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Date of Collection </th>
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr class="hover:bg-gray-200">
                    <td class="py-4 px-6 border-b border-grey-light">{item.availableBloodDonar}</td>
                    <td>{item.quantity}</td>
                    <td>{item.dateOfRecentCollection}</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        
          </div>  
      </div>  
      
    </div>
  )
}

export async function getServerSideProps() {
  
  try {
  const response = await axios.get('http://localhost:3000/bloodbank/all');
  const data = await response.data;
  console.log(data);

  return {
    props: {
      data
    }
  };
  
  } catch (error) {
console.log(error);
  return {
    props: {
      data: {status:"enter valid user id"}
    }
  };
}
}
