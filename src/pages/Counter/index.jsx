import { useSelector } from "react-redux";
import Counter from "../../components/Counter";

function CounterPage() {
    const count = useSelector((state) => state.counter.value);
    return (
        <>
            <div>The count is {count}</div>
            <Counter />
        </>
    );
}

export default CounterPage;
