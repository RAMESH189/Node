const fs = require('fs');
for (let i = 0; i < 10000; i++){
    fs.writeFileSync('./contents/writeBigFile.txt', `\nThis is number ${i} y'all`, {flag:'a'})
}
