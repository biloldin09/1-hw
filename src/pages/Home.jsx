
import { Link } from "react-router-dom"

const Home = () => {


    return (
        <div>
            <h1>Home Page</h1>
            <Link to={'/page1'}>page1</Link>
            <br />
            <Link to={'/page2'}>page2</Link>
        </div>
    );
}

export default Home;
