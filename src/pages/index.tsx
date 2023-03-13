import React, { useState } from 'react'
import ControlPanel from '@/components/control-panel';
import SortingAlgorithm from '@/components/sorting-algorithm'


const App: React.FC = () => {
    const [arr, setArr] = useState<number[]>([3, 4, 2, 6, 8, 10, 5, 7, 9, 1]);

    return (
        <div className='container'>
            <ControlPanel />
            <SortingAlgorithm arr={arr} setArr={setArr} />
        </div>
    )
}

export default App;