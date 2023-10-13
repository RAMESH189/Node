const fs = require('fs');
const getText = (path) => {
    return new Promise((ressolve, reject) => {
        fs.readFile(path, 'utf8', (err, res) => {
            if (err) {
                reject(err)
            }
            else {
                ressolve(res)
            }
        })
    })
}

const start = async () => {
   try {
       const firstData = await getText('./contents/first.txt')
       const secondData = await getText('./contents/subdir/text.txt')
    console.log(firstData);
    console.log(secondData);
   } catch (error) {
    console.error(error)
   }
    
}

start()


