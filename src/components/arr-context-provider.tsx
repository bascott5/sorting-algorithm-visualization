import { createContext, useReducer, useEffect } from "react";

export interface ArrayContextProps {
  children: React.ReactElement;
}

export type Action = 
    | { type: "randomize" } 
    | { type: "bubble sort" } 
    | { type: "insertion sort" }
    | { type: "merge sort" } 
    | { type: "quick sort" }
    | { type: "selection sort" }

const initArr: number[] = [3, 4, 2, 6, 8, 10, 5, 7, 9, 1];
export const arrContext = createContext<[number[], React.Dispatch<Action>]>([initArr, () => initArr]);

const ArrContextProvider: React.FC<ArrayContextProps> = ({ children }: ArrayContextProps) => {
  const arrReducer = (arr: number[], action: Action) => {
    switch (action.type) {
      case "randomize":
        for (let i = 0; i < 5; i++) {
          arr.pop();
          arr.unshift(Math.floor(Math.random() * 5) + 1);
        }
        return [...arr.slice()];
      
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
                    }, 100 * (i));
                }
            }, []);
        
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