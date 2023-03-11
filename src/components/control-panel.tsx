import { useReducer, useEffect } from "react";

const ControlPanel: React.FC = () => {
    const arrReducer = (arr: number[], action: any) => {
        switch (action.type) {
            case "reset":
                useEffect(() => {
                    for (let i = 0; i <= 5; i++) {
                        let arrCopy: number[] = [...arr];
                        arrCopy.unshift(Math.floor(Math.random() * 5) + 1);
                        arrCopy.pop();

                        return arr = [...arrCopy];
                    }
                }, []);

            case "bubble sort":
                useEffect(() => {
                    for (let i = 0; i < arr.length; i++) {
                      setTimeout(() => {
                        let arrCopy: number[] = [...arr];
                        for (let j= 0; j < arr.length - i - 1; j++) {
                            if (arrCopy[j] > arrCopy[j + 1]) {
                                let temp = arrCopy[j];
                                arrCopy[j] = arrCopy[j + 1];
                                arrCopy[j + 1] = temp;
                            }
                        }
                        return arr = [...arrCopy];
                      }, 100 * (i + 1));
                    }
                }, []);

            case "insertion sort":
                useEffect(() => {
                    for (let i = 1; i < arr.length; i++) {
                      setTimeout(() => {
                        let arrCopy: number[] = [...arr];
                        let current = arrCopy[i];
                        let j = i - 1;
                        while (j > -1 && current < arrCopy [j]) {
                            arrCopy[j + 1] = arrCopy[j];
                            j--;
                        }
                        arrCopy[j + 1] = current;
                        
                        return arr = [...arrCopy];
                      }, 100 * (i + 1));
                    }
                }, []);

            case "merge sort":
                useEffect(() => {
                    for (let i = 0; i < arr.length; i++) {
                        setTimeout(() => {
                            let arrCopy: number[] = [...arr];
                            const mid = arr.length / 2;
                            if (arr.length < 2) {
                                return arrCopy
                            }
            
                            const left = arrCopy.splice(0, mid);
                            return merge(MergeSort(left), MergeSort(arr))
                      }, 100 * (i + 1));
                    }
                }, []);

            case "quick sort":
                useEffect(() => {
                    for (let i = 0; i < arr.length; i++) {
                        setTimeout(() => {
                            let arrCopy: number[] = [...arr];
                            if (arr.length <= 1) return arrCopy;
                            let pivot = arrCopy[0];
                            let left = arr.filter(x => x < pivot);
                            let right = arr.filter(x => x > pivot);
            
                            return [...left, pivot, ...right];
                        }, 100 * (i + 1));
                    }
                }, []);

            case "selection sort":
                useEffect(() => {
                    for (let i = 0; i < arr.length; i++) {
                        setTimeout(() => {
                            let arrCopy: number[] = [...arr];
                            let minIndex = i;
                            for (let j = i + 1; j < arr.length; j++) {
                                if (arrCopy[j] < arrCopy[minIndex]) {
                                    minIndex = j;
                                }
                            }
                            if (minIndex !== i) {
                                [arrCopy[i], arrCopy[minIndex]] = [arrCopy[minIndex], arrCopy[i]];
                            }
            
                            return arr = [...arrCopy];
                        }, 100 * (i + 1));
                    }
                }, []);
        }
    }
    
    const [arr, dispatch] = useReducer<any>(arrReducer, [])
    return(
      <div className='header'>
        <h1>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
        <button>Selection Algorithm</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    )
  }
  
  export default ControlPanel;

  function merge(left: any, right: any) {
    let arrCopy = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arrCopy.push(left.shift())
        }
    }
}