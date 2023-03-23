import { useEffect, useContext, SetStateAction } from "react";
import { arrContext } from "./arr-context-provider";

interface Algorithm {
    algorithm: string
}

export const AlgorithmLoader: React.FC<Algorithm> = ({ algorithm }: Algorithm) => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<SetStateAction<number[]>>]>(arrContext);

    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
            switch(algorithm) {
              case "selection sort":
                return () => setArr(<SelectionSort arr={arr} />);
              default:
                return () => setArr(<Randomize arr={arr} />);
            }
    
            //document.querySelectorAll('.bars')[i].style.fill = 'white';
          }, 100 * i);
        }
    }, []);
}

