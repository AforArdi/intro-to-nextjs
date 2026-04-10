import Link from "next/link";

const PostDetails = async ({params}) => {
    const {post} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`);
    const data = await res.json();
    console.log(data);
    return ( 
        <div className="container mx-auto mt-10">
            <h1 className="font-bold text-2xl text-center">Single Post Details:</h1>
            <div className="border rounded-2xl p-4 mb-4">
                <p>Post About: {data.body}</p>
                <Link href={'/posts'} className="btn btn-soft">Go Back</Link>
            </div>
        </div>
     );
}
 
export default PostDetails;