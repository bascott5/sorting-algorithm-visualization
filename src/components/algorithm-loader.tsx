import Visualizer from "./visualizer"
import BubbleSort from "./algorithms/bubble-sort"
import InsertionSort from "./algorithms/insertion-sort"
import QuickSort from "./algorithms/quick-sort"
import SelectionSort from "./algorithms/selection-sort"
import MergeSort from "./algorithms/merge-sort"

interface AlgorithmProps {
    algorithm: string
}

const AlgorithmLoader: React.FC<AlgorithmProps> = ({ algorithm }: AlgorithmProps) => {

    switch(algorithm) {
        case "bubble sort":
            return <BubbleSort />
        case "insertion sort":
            return <InsertionSort />
        case "selection sort":
            return <SelectionSort />
        case "merge sort":
            return <MergeSort />
        case "quick sort":
            return <QuickSort />
        default:
            return <Visualizer />
    }
}

export default AlgorithmLoader;