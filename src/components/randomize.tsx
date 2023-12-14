const Randomize = (arr: number[]) => {
    console.log("Randomize");
    
    arr = [];
    while (arr.length < 25) {
        let rng = Math.floor(Math.random() * 25) + 1;
        if (arr.indexOf(rng) === -1) {
            arr.push(rng);
            }
    }
    return [...arr.slice()];
}

export default Randomize;