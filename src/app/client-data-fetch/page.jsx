"use client"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function ClientDataFetching() {
    const [loading, setloading] = useState(false);
    const [users, setUsers] = useState([]);

    async function fetchData() {
        try {
            setloading(true);
            const response = await fetch("http://dummyjson.com/users");
            const result = await response.json();

            if (result?.users) {
                setUsers(result.users);
                setloading(false);
            }
        } catch (error) {
            console.log(error);
            setUsers([]);
            setloading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <div className="text-3xl flex justify-center items-center h-screen">Loading...</div>
    }
    return (
        <div>
            <h1>Client side component</h1>
            <ul className='flex flex-col justify-center items-center h-screen'>
                {
                    users && users.length > 0 ?
                    users.map((user, index) => {
                            return (
                                <li key={user.id}>
                                    <Link href={`/client-data-fetch/${user.id}`} className='cursor-pointer m-3'>{user.firstName}</Link>
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