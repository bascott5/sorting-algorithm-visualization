import { createContext, useReducer, useEffect } from "react";

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

const initArr: number[] = [3, 4, 2, 6, 8, 10, 5, 7, 9, 1];
export const arrContext = createContext<[number[], React.Dispatch<Action>]>([initArr, () => initArr]);

const ArrContextProvider: React.FC<ArrayContextProps> = ({ children }: ArrayContextProps) => {
  const arrReducer = (arr: number[], action: Action) => {
    switch (action.type) {
        case "bubble sort":

        case "insertion sort":

        case "merge sort":

        case "quick sort":

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
  };

  const [arr, dispatch] = useReducer<(arr: number[], action: Action) => number[]>(arrReducer, initArr);
  return (
    <arrContext.Provider value={[arr, dispatch]}>
      {children}
    </arrContext.Provider>
  );
};

export default ArrContextProvider;