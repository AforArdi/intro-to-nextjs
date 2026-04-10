import Link from "next/link";

const UserDetails = async ({params}) => {
    const {user} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
    const data = await res.json();
    return ( 
        <div className="container mx-auto mt-10">
            <h1 className="font-bold text-2xl text-center">Single User Details:</h1>
            <div className="border rounded-2xl p-4 mb-4">
                <p>User Phone: {data.phone}</p>
                <p>User Website: {data.website}</p>
                <Link href={'/users'} className="btn btn-soft">Go Back</Link>
            </div>
        </div>
     );
}
 
export default UserDetails;