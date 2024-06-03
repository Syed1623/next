"use client"
import { useEffect, useState } from "react"


export default function ClientDataFetch({params}){
    const [loading,setLoading] = useState(false);
    const [users,setUsers] = useState({});

    async function fetchData(id){
        try{
            setLoading(true)
            const response = await fetch(`http://dummyjson.com/users/${id}`);
            const result = await response.json();
            if(Object.keys(result).length > 0){
                setUsers(result);
                setLoading(false);
            }
        }catch(err){
            console.log(err);
            setUsers({});
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData(params.details);
    },[])
    if(loading){
        return (
            <div className="flex justify-center items-center h-screen text-3xl">Loading.....</div>
        )
    }
    return(
        <div>
            <h1>Client Data Fetch {params.details}</h1>
            <ul>
                {
                    users && Object.keys(users).length > 0 ?
                        <li>
                            <p>{users.firstName}</p>
                            <p>{users.age}</p>
                            <p>{users.gender}</p>
                        </li>
                    :

                    <div>No Data</div>
                }
            </ul>
        </div>
    )
}