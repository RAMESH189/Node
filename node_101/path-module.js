const path = require('path')

console.log(path.sep);
 
const filePath = path.join('/contents', 'subdir', 'text.txt')
console.log(filePath);
console.log(path.basename(filePath));

