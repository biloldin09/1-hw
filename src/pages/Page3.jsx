import { useNavigate } from 'react-router-dom';

const Page3 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>page3</h1>
            <button onClick={() => {
                navigate(-1)
            }}>go back</button>
        </div>
    );
}

export default Page3;