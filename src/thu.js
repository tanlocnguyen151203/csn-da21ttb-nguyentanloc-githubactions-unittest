const fs = require('fs');
const path = 'src/kiemtra.test.js';

fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`${path} không tồn tại`);
        return;
    }
    console.log(`${path} tồn tại`);
});
