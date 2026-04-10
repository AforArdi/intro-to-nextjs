import Link from "next/link";

const PostsPage = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();
    return ( 
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl text-center">All Posts</h1>
            <div>
                {
                    posts.map(post=> {
                        return (
                            <div key={post.id} className="border rounded-2xl p-4 mb-4">
                                <p className="font-bold text-2xl">Title: {post.title}</p>
                                <Link href={`/posts/${post.id}`} className="btn btn-soft">Show Details</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default PostsPage;