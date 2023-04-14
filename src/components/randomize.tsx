import { useEffect, useContext } from "react";
import Visualizer from "./visualizer"
import { arrContext } from "./arr-context-provider";

const Randomize = (arr: number[]) => {
    console.log("Randomize");
    //const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    
    arr = [];
    while (arr.length < 25) {
        let rng = Math.floor(Math.random() * 25) + 1;
        if (arr.indexOf(rng) === -1) {
            arr.push(rng);
            }
    }
    return [...arr.slice()];
}

export default Randomize;