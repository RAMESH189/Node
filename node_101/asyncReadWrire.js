const fs = require('fs');
const util = require('util')
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const start = async () => {
   try {
       const firstData = await readFilePromise('./contents/first.txt', 'utf8')
       const secondData = await readFilePromise('./contents/subdir/text.txt', 'utf8')
       await writeFilePromise('./contents/asyncWrite.txt', `${ firstData}\n${secondData }`)
    console.log(firstData);
    console.log(secondData);
   } catch (error) {
    console.error(error)
   }
    
}

start()


