const A = (input) => {
    const rows = input.split('\n');
    const rowLength = rows[0].length-1;
    const numRows = rows.length;
    const counts = {};
    rows.forEach(row => {
        row = row.replace(/(\r\n|\n|\r)/gm, "");
        for(let i = 0; i < rowLength; i++) {
            if(!counts[i]) {
                counts[i] = 0;
            }
            counts[i] += row[i] === "1" ? 1 : 0;
        }
    });
    
    let binaryGamma = "";
    let binaryEpsilon = "";
    for (let i = 0; i < rowLength; i++) {
        const gamma = counts[i] > numRows / 2 ? "1" : "0";
        const epsilon = gamma === "1" ? "0" : "1";
        binaryGamma += gamma;
        binaryEpsilon += epsilon;
    }

    const gamma = parseInt(binaryGamma, 2);
    const epsilon = parseInt(binaryEpsilon, 2);

    return gamma * epsilon;
}

const countOnes = (lines, index) => {
    let count = 0;
    for (const line of lines) {
      count += line[index] === "1" ? 1 : 0;
    }
    return count;
  }

const B = (input) => {
    let lines = input.split("\n");
    const lineLength = lines[0].length;

    let oxygen = Array.from(lines);
    let co2 = Array.from(lines);
    for (let i = 0; i < lineLength; ++i) {
        let count = countOnes(oxygen, i);
        let keep = count >= oxygen.length / 2 ? "1" : "0";
        oxygen = oxygen.filter((entry) => entry[i] === keep);
        if (oxygen.length === 1) {
        break;
        }
    }

    for (let i = 0; i < lineLength; ++i) {
        let count = countOnes(co2, i);
        let keep = count >= co2.length / 2 ? "0" : "1";
        // Remove all entries with a '1' in this index
        co2 = co2.filter((entry) => entry[i] === keep);
        if (co2.length === 1) {
        break;
        }
    }

    const oxygenDec = parseInt(oxygen[0], 2);
    const co2Dec = parseInt(co2[0], 2);

    return oxygenDec * co2Dec;
}

module.exports = { A, B };