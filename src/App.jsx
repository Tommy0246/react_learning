import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficutly";
import { MenuList } from "./components/MenuList/MenuList";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";
import "./global.css";

export function App() {
    const [currentDifficuty, setCurrentDifficutly] = useState("");

    function updateDifficulty(difficulty) {
        setCurrentDifficutly(difficulty);
    }

    return (
        <div onClick={() => updateDifficulty("")}>
            <MenuList
                onItemClick={updateDifficulty}
                difficulty={currentDifficuty}
            />
            <DisplayDifficulty
                onItemClick={updateDifficulty}
                difficulty={currentDifficuty}
            />
        </div>
    );
}
