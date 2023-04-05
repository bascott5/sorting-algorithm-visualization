import { useEffect, useContext } from "react";
import Visualizer from "./visualizer"
import { arrContext } from "./arr-context-provider";

interface ArrProps {
    arr: number[],
    setArr: React.SetStateAction<number[]>
}

const Randomize: React.FC = () => {
    console.log("Randomize");
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    useEffect(() => {
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
    }, []);

    return <Visualizer />
}

export default Randomize;