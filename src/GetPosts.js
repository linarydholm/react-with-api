import { useState, useEffect } from "react";
import Post from "./Post";

const GetPosts = () => {
    const [posts, setPosts] = useState(null);
    
    useEffect(() => {
        const getPosts = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await response.json();

          setPosts(data);
        };

        getPosts();
      }, []);

      return (
        posts?.map((post) => {
            return <Post {...post}/>
        })
      )
}
 
export default GetPosts;