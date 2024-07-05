import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users${params.id}`)
        .then(response => response.json())
        .then((data) => {
            setUser(data)
        })
    }, [])
    return (
        <div>
            <h1>Detail</h1>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
        </div>
    )
}

export default Detail;