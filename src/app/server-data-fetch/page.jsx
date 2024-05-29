import Link from 'next/link';
import React from 'react'

async function fetchUsers(){
  try {
    const response = await fetch('http://dummyjson.com/users',
      {cache:"no-store"}
    );
    const res = await response.json();
    return res.users;
  }
  catch(error){
    throw new Error(error)
  }
}

const ServerDataFetching = async() => {

  const Users =  await fetchUsers()
  const slicedUsers = Users.slice(0,5)
  console.log(slicedUsers)
  return (
    <div>
      <ul className='flex flex-col justify-center items-center h-screen'>
      {
        slicedUsers && slicedUsers.length > 0 ?
        slicedUsers.map((user,index)=>{
          return (
            <li key={user.id}>
              <Link href={`/server-data-fetch/${user.id}`} className='cursor-pointer m-3'>{user.firstName}</Link>
            </li>
          )
        })
        :
        <li>No Data</li>
      }
      </ul>
    </div>
  )
}

export default ServerDataFetching
