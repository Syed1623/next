async function fetchData(id){
    try{
        console.log(id)
        const response = await fetch(`http://dummyjson.com/users/${id}`,
            {cache:"no-store"}
        );
        const red = await response.json();
        return red

    }catch(error){
        throw new Error(error)
    }
}


export default async function UserDetails({params}){
    console.log(params.details);
    const singleUserDetails = await fetchData(params.details);
    console.log(singleUserDetails);
    return (
        <div className="flex flex-col justify-center items-center h-screen shadow-2xl">
            <h1>This is User details Page</h1>
            <p>{singleUserDetails?.firstName}</p>
            <p>{singleUserDetails?.age}</p>
            <p>{singleUserDetails?.phone}</p>
        </div>
    )
}