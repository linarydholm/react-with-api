import { useState } from "react";
import User from "./User";

const Post = ({title, body, userId}) => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();

        setUser(data);
    }
    
    return(
        <div className="post">
            <p><strong>{title}</strong></p>
            <p>{body}</p>

            {user ? <User {...user} /> : <button onClick={getUser}>Get user</button>}
        </div>
    )
}
 
export default Post;