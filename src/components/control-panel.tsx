import { useReducer, useContext, useEffect } from "react";

//- - create global context for array and move use reducer to index while keeping the buttons here
//- - hook up visualizer to array global context
//- - create two seperate sides of the screen

type action =
    | { type: "reset" }
    | { type: "selection sort" }

const ControlPanel: React.FC = () => {
    const arrReducer = (arr: number[], action: action) => {
        switch (action.type) {
            case "reset":
                for (let i = 0; i < 5; i++) {
                    arr.pop();
                    arr.unshift(Math.floor(Math.random() * 5) + 1);
                    
                    return [...arr.slice()];
                }

            /*case "bubble sort":
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
                }, []);*/

            case "selection sort":
                useEffect(() => {
                    for (let i = 0; i < arr.length; i++) {
                        setTimeout(() => {
                            let minIndex = i;
                            for (let j = i + 1; j < arr.length; j++) {
                                if (arr[j] < arr[minIndex]) {
                                    minIndex = j;
                                }
                            }
                            if (minIndex !== i) {
                                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                            }
            
                            return [...arr.slice()];
                        }, 100 * (i + 1));
                    }
                }, []);
        }
    }
    
    const [arr, dispatch] = useReducer<any>(arrReducer, [])
    return(
      <div className='headerContainer'>
        <h1 className='header'>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
        <li className='list'>
            <ul><button>Bubble Sort</button></ul>
            <ul><button>Insertion Sort</button></ul>
            <ul><button>Merge Sort</button></ul>
            <ul><button>Quick Sort</button></ul>
            <ul><button>Selection Sort</button></ul>
            <ul><button onClick={() => dispatch("reset")}>Reset</button></ul>
        </li>
      </div>
    )
  }
  
  export default ControlPanel;

  /*function merge(left: any, right: any) {
    let arrCopy = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arrCopy.push(left.shift())
        }
    }
    }*/