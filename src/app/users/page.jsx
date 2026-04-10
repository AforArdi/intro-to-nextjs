import Link from "next/link";

const UsersPage = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    // console.log(users);
    return ( 
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl text-center">All Users</h1>
            <div>
                {
                    users.map(user=> {
                        return (
                            <div key={user.id} className="border rounded-2xl p-4 mb-4">
                                <p className="font-bold text-2xl">Name: {user.name}</p>
                                <p className="font-bold text-2xl">Email: {user.email}</p>
                                <Link href={`/users/${user.id}`} className="btn btn-soft">Show Details</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default UsersPage;