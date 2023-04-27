import ArrContextProvider from '@/components/arr-context-provider';
import ControlPanel from '@/components/control-panel';

const App: React.FC = () => {
    return ( 
        <div>
            <ArrContextProvider>
                <ControlPanel />
            </ArrContextProvider>
        </div>
    )
}

export default App;