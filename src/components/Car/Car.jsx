export function Car(props) {
    function onClick() {
        props.onCarClick(2);
    }

    return (
        <div className="box">
            <div>Je suis {"<Car />"}</div>
            <button onClick={onClick}>click</button>
        </div>
    );
}
