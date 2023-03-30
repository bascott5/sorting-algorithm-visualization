import { useContext } from "react";
import { arrContext } from './arr-context-provider';

export const Randomize = () => {
    console.log("Randomize");
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    
    setArr(arr => {
        arr = [];
        while (arr.length < 10) {
            let rng = Math.floor(Math.random() * 10) + 1;
            if (arr.indexOf(rng) === -1) {
                arr.push(rng);
            }
        }
        return [...arr.slice()];
    });
}