import { useState, useEffect } from "react";

const Array: React.FC = () => {
    const [arr, setArr] = useState<number[]>([]);
    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            setArr(arr => {
                let arrCopy: number[] = [...arr];
                arrCopy.unshift(Math.floor(Math.random() * 5) + 1);
                arrCopy.pop();
              
                return arrCopy;
            });
        }
    }, []);
}

export default Array;