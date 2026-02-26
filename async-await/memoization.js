
let a;
console.log(a)

function doMemoized() {
    const cache = {}
    return function heavyCalculcation(x) {
        if (cache[x]) return cache[x];
        const startTime = Date.now();
        let currentTime = startTime;
        while (startTime + 1000 > currentTime) {
            currentTime = Date.now();
            console.log('Calculating...', currentTime)
        }

        const result = +Math.sqrt(x).toFixed(3);
        cache[x] = result;
        return result;
    }
}

const calculateWithMemoized = doMemoized();