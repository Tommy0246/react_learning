import { Greetings } from "./components/Greetings/Greetings";
import { Car } from "./components/Car/Car";
import "./global.css";

export function App() {
    return (
        <>
            <Car />
            <Greetings />
        </>
    );
}
