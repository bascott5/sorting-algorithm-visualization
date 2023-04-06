import Visualizer from "./visualizer"
import SelectionSort from "./algorithms/selection-sort"

interface AlgorithmProps {
    algorithm: string
}

const AlgorithmLoader: React.FC<AlgorithmProps> = ({ algorithm }: AlgorithmProps) => {
    switch(algorithm) {
        case "selection sort":
            return <SelectionSort />
        default:
            return <Visualizer />
    }
}

export default AlgorithmLoader;