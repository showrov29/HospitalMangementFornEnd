import React from 'react'
import axios from 'axios';

export default function bloodbank({data}) {

  return (
    <div>
<h1>All available Blood:</h1>
<p>{data.status}</p>
<table>
            <thead>
              <tr>
                <th>Blood Group</th>
                <th>Quantity </th>
                <th>Date of Collection </th>
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.availableBloodDonar}</td>
                    <td>{item.quantity}</td>
                    <td>{item.dateOfRecentCollection}</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        
        
      
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
