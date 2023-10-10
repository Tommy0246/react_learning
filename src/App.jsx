import { Car } from "./components/Car/Car";
import "./global.css";

export function App() {
    function hello(number) {
        alert("hello de <App/>" + number);
    }

    return (
        <>
            <div>Je suis {"<App />"}</div>
            <Car onCarClick={hello} />
        </>
    );
}
