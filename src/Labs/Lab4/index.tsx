import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";

export default function Lab1() {
    function sayhello() {
        alert("Hello");
    } 

    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayhello}/>
            <EventObject />
            <Counter />
        </div>
    )
};