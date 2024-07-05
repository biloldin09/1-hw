import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Page1 = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const params = useParams();
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(response => response.json())
        .then((data) => {
            setUser(data);
        });
    }, [params.id]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => {
            setUsers(data);
        });
    }, []);
    
    return (
        <div>
            <h1 className="row">Page 1</h1>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <button onClick={() => {
                navigate(-1);
            }}>go back</button>
            { 
                users.map(item => (
                    <h1 key={item.id}><Link to={`/users/${item.id}`}>{item.name}</Link></h1>
                ))
            }
        </div>
    );
};

export default Page1;
