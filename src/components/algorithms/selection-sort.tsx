import { useEffect, useContext, useRef } from "react";
import { arrContext } from '../arr-context-provider';
import Visualizer from '../visualizer';

const SelectionSort: React.FC = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    const highlightRef = useRef<React.MutableRefObject<any>>(null);
    console.log("Selection Sort");

    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
                setArr(arr => {
                    let minIndex = i;
                    for (let j = i + 1; j < arr.length; j++) {
                        if (arr[j] < arr[minIndex]) {
                            minIndex = j;
                        }
                    }
                    if (minIndex !== i) {
                        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                    }
                    //highlightRef.current[i].style.fill = "white";
    
                    return [...arr.slice()];
                });
            }, 100 * (i + 1))
        }
    }, []);

    return <Visualizer />
}

export default SelectionSort;