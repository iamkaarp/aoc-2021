const A = (input) => {
    const rows = input.split('\n');
    let horizontal = 0;
    let depth = 0;
    rows.forEach(row => {
        const cmd = row.split(' ');
        if(cmd[0] === 'forward') {
            horizontal += parseInt(cmd[1]);
        }
        if(cmd[0] === 'down') {
            depth += parseInt(cmd[1]);
        }
        if(cmd[0] === 'up') {
            depth -= parseInt(cmd[1]);
        }
    });

    return horizontal * depth;
}

const B = (input) => {
    const rows = input.split('\n');
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    rows.forEach(row => {
        const cmd = row.split(' ');
        if(cmd[0] === 'forward') {
            horizontal += parseInt(cmd[1]);
            depth += aim * parseInt(cmd[1]);
        }
        if(cmd[0] === 'down') {
            aim += parseInt(cmd[1]);
        }
        if(cmd[0] === 'up') {
            aim -= parseInt(cmd[1]);
        }
    });

    return horizontal * depth;
}

module.exports = { A, B };