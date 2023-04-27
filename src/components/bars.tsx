const Bars: React.FC = () => {
    return (
        <svg className='bars' key={keys.toString()} viewBox={"0 0 500 500"}>
            <rect height={keys * 6} width={15} x={arr.indexOf(keys) * 20} y={0} />
        </svg>
    );
}