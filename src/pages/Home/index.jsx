import { useDispatch, useSelector } from "react-redux";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.css";
import Counter from "../../components/Counter";
import { getUserAsync } from "../../store/features/userSlice";

function Home() {
    const dispatch = useDispatch();
    const { pending, value: user } = useSelector(state => state.user);
    // const [[firstName, lastName], setNames] = useState([]);
    // const [pending, setPending] = useState(false);
    // const handleTestAsyncClick = async() => {
    //     if (pending) return;
    //     setPending(true);
    //     const { response } = await dispatch(testAsync({
    //         request: '/api/profile'
    //     }));
    //     setNames([response.user.firstName, response.user.lastName]);
    //     setPending(false);
    // }
    const handleTestAsyncClick = () => {
        if (pending) return;
        dispatch(getUserAsync({
            request: '/api/profile'
        }));
    }
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <Counter />
            {user ? <div>
                {user.firstName} {user.lastName}
            </div> : <button onClick={handleTestAsyncClick} disabled={pending}>
                {pending ? 'Pending...' : 'Test Async'}
            </button>}
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default Home;
