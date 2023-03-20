//TODO: make state an object instead with an array in it, as well as include a string that can dispatch and call different sorting algorithms based off a swich case in a use effect hook
import { createContext, useReducer, useEffect, useRef } from "react";

export interface ArrayContextProps {
  children: React.ReactElement;
}

export type Action = 
    | { type: "bubble sort" } 
    | { type: "insertion sort" }
    | { type: "merge sort" } 
    | { type: "quick sort" }
    | { type: "selection sort" }
    | { type: "randomize" } 

const initArr: number[] = [];
export const arrContext = createContext<[number[], React.Dispatch<Action>]>([initArr, () => initArr]);

const ArrContextProvider: React.FC<ArrayContextProps> = ({ children }: ArrayContextProps) => {
  const arrReducer = (arr: number[], action: Action) => {
    switch (action.type) {
        case "bubble sort":
          for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
              for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                  let temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
                }
              }
              return [...arr.slice()];
            }, 100 * (i));
          }

        case "insertion sort":
          for (let i = 1; i < arr.length; i++) {
            setTimeout(() => {
              let current = arr[i];
              let j = i - 1;
              while (j > -1 && current < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
              }
              arr[j + 1] = current;
              return [...arr.slice()];
            }, 100 * (i));
          }

        case "merge sort":
          for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
              for (let j = 0; j < arr.length; j++) {
                
              }

            }, 100 * (i));
          }

        case "quick sort":
          for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
              for (let j = 0; j < arr.length; j++) {
                
              }

            }, 100 * (i));
          }

        case "selection sort":
          console.log("selection sort!");
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
                //TODO: add useRef hook with visualizer.tsx's returned JSX as the ref and change its colors based off the index of the array value's index being changed
        
                return [...arr.slice()];
                }, 100 * (i));
              }
          }, []);
        
        case "randomize":
          console.log("randomize!");
          arr = [];
          while (arr.length < 10) {
            let rng = Math.floor(Math.random() * 10) + 1;
            if (arr.indexOf(rng) === -1) {
                arr.push(rng);
            }
          }
          return [...arr.slice()];
        
        default:
          return [...arr.slice()];
    }
  }

  const [arr, dispatch] = useReducer<(arr: number[], action: Action) => number[]>(arrReducer, initArr);
  useEffect(() => {
    dispatch({ type: "randomize" });
  }, []);
  useEffect(() => {

  }, [arr]);

  return (
    <arrContext.Provider value={[arr, dispatch]}>
      {children}
    </arrContext.Provider>
  );
};

export default ArrContextProvider;