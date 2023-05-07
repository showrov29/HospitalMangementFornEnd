import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import Navigation from '../components/navigation'
import Link from 'next/link';
import NavBar from '../components/navBar';
import Sessioncheck from '../components/sessioncheck';
export default function ambulances({data}) {
  const router = useRouter();
  const [searchData,setSearchData]=useState([])
  const [ambulance,setAmbulance]=useState(null);

  useEffect(() => {
  
    setAmbulance(data)
    setSearchData(data)
  },[]);

  const ok={
    sub:(item)=>{
      const data ={
        patientId:localStorage.getItem('id'),
        status:false
      }
      console.log(data);
      axios.put(`http://localhost:3000/ambulance/edit/${item}`,data)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      })
      window.location.reload(false);
      
    }

   

  }


  const handleFilter=(e)=>{
    if(e.target.value==''){
      setAmbulance(searchData)

    }
   
     else{ 
      
      const filterResult=  searchData.filter(item=>item.location.toLowerCase().includes(e.target.value.toLowerCase()))
        setAmbulance(filterResult)
        console.log('file',filterResult);}
    
    

}
 


 





  return (
    
    <div>
      <Sessioncheck/>
      <Navigation/>

      
      <NavBar/>


      <div class="px-14 w-3/4 p-4 sm:ml-64 flex space-x-4 absolute">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        </div>
        <input type="text" onChange={(e)=>handleFilter(e)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
        <br/>
<br/>
    </div>


      <div class="w-3/4 mx-auto mt-16 p-4 sm:ml-64">
        <div class="bg-gray-50 shadow-md rounded my-6">    
      <table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Driver Name</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Rent </th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Location </th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action </th>
                
              </tr>
            </thead>
            <tbody>
              {ambulance && ambulance.map((item) => {
                return (
                  <tr  class="hover:bg-gray-200">
                    <td class="py-4 px-6 border-b border-grey-light">{item.driverName}</td>
                    <td>{item.rent}</td>
                    <td>{item.location}</td>
                   
                   
                    <td  class="py-4 px-6 border-b border-grey-light space-x-5">
                      <button class="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-4 border border-blue-700 rounded" onClick={()=>{ok.sub(item.id)}} >Book</button>
                      <Link class="text-blue-600 visited:text-purple-600 " href={`/Patient/Ambulances/${item.id}`} >Details</Link>
                    </td>
                    
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
  
  



