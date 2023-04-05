import Visualizer from "./visualizer"
import SelectionSort from "./algorithms/selection-sort"
import Randomize from "./randomize"
import { useEffect } from "react"

interface AlgorithmProps {
    algorithm: string
}

const AlgorithmLoader: React.FC<AlgorithmProps> = ({ algorithm }: AlgorithmProps) => {
    switch(algorithm) {
        case "selection sort":
            return <SelectionSort />
        case "randomize":
            return <Randomize />
        default:
            return <Visualizer />
    }
}

export default AlgorithmLoader;