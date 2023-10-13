const fs = require('fs')
const fsPromises = require('fs').promises

// const first = fs.readFileSync('./contents/first.txt', 'utf8')
// const text = fs.readFileSync('./contents/subdir/text.txt', 'utf8')

//  fs.writeFileSync('./contents/results.txt', `${first}${text}`)
// console.log(first);
// console.log(text);


fs.readFile('./contents/first.txt', 'utf8' , (err, res) => {
    if (err) {
        return
    } else {
        console.log(res);
    }
})