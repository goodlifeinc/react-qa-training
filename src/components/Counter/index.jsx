import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/features/counterSlice";
import style from './style.module.css';

export default function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className={style.card}>
            <button onClick={() => dispatch(increment())}>
                count is {count}
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
    );
}
