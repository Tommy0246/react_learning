import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constant";

export function MenuList({ difficulty, onItemClick }) {
    return (
        <div
            onClick={(event) => event.stopPropagation()}
            className={s.container}
        >
            {DIFFICULTIES.map((diff) => (
                <MenuListItem
                    onClick={onItemClick}
                    difficulty={diff}
                    isSelected={difficulty == diff}
                />
            ))}
        </div>
    );
}
