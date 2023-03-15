import React from 'react'
import ControlPanel from '@/components/control-panel';
import ArrContextProvider from '@/components/arr-context-provider';
import Visualizer from '@/components/visualizer';


const App: React.FC = () => {
    return ( 
        <ArrContextProvider>
            <div className='container'>
                <ControlPanel />
                <Visualizer />
            </div>
        </ArrContextProvider>
    )
}

export default App;