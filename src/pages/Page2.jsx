import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => {
            setPosts(data);
        });
    }, []);

    return (
        <div>
            <h1 className="row">Page 2</h1>
            <button onClick={() => {
                navigate(-1);
            }}>Go Back</button>

            { 
                posts.map(item => (
                    <h1 key={item.id}><Link to={`/posts/${item.id}`}>{item.title}</Link></h1>
                ))
            }
        </div>
    );
};

export default Page2;
