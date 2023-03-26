export const Randomize = (arr: number[]) => {
    console.log("randomize");
    
    arr = [];
    while (arr.length < 10) {
        let rng = Math.floor(Math.random() * 10) + 1;
        if (arr.indexOf(rng) === -1) {
            arr.push(rng);
        }
    }
    return [...arr.slice()];
}