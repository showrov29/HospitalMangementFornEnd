import React from 'react'

export default function Card(props) {
 

  return (
    <div>
     
      <div className="flex items-center justify-center w-full mt-20">
      <div className="p-4 rounded-lg h-72 w-80 shadow-lg bg-gray-50 hover:bg-gray-100">
        <div className="photo-wrapper p-2">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile picture"
            className="rounded-full w-24 h-24 max-auto "
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold"> Name: {props.data.name}</h1>
            <p className="text-rose-900">Age: {props.data.age} </p>
            <p className="text-rose-900">Fees: {props.data.fees} </p>
            <p className="text-rose-900">Speciality: {props.data.specialist} </p>
            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href={`/Patient/Doctor/${props.data.id}`}> Details</a>
            </div>

            {/* <Link href={`../editprofile`} >Eid Profile</Link> */}
          </div>
        </div>
       
      
      </div>
    </div>
      
    </div>
  )
}


