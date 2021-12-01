const A = (input) => {
    const split = input.split('\n');
    let inc = 0;
    for(let i = 1; i < split.length; i++) {
        if(parseInt(split[i]) >= parseInt(split[i-1])) {
            inc++;
        }
    }
    return inc;
}

const B = (input) => {
    const windowSize = 3;
    const frames = [];
    let offset = 0;
    let inc = 0;

    for(const line of input.split('\n')) {
        frames.push({
            count: 0,
            value: 0,
        });
        for(let i = offset; i < frames.length; i++) {
            const frame = frames[i];
            frame.value += parseInt(line);
            frame.count++
      
            if (frame.count === windowSize) {
              inc += (offset && frame.value > frames[i - 1].value)
              offset++
            }
        }
    }
    
    return inc;
}

module.exports = { A, B };