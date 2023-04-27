import { createContext, useState, SetStateAction } from "react";

interface ArrayContextProps {
  children: React.ReactElement;
}

const initArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
export const arrContext = createContext<[number[], React.Dispatch<SetStateAction<number[]>>]>([initArr, () => initArr]);

const ArrContextProvider: React.FC<ArrayContextProps> = ({ children }: ArrayContextProps) => {
  const [arr, setArr] = useState(initArr);
  return (
    <arrContext.Provider value={[arr, setArr]}>
      {children}
    </arrContext.Provider>
  );
};

export default ArrContextProvider;