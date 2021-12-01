const fs = require('fs');

function fileReader(file) {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return data;
    } catch (err) {
        console.error(err);
    }
}

module.exports = fileReader;