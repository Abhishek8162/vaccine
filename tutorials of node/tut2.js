const fs = require('fs');
let text=fs.readFileSync("temp.txt","UTF-8");
text=text.replace('abhishek','Rohan');
console.log("the content of the file is ");
console.log(text);
//now create new file and store the value into it
console.log('creating a new file...');
fs.writeFileSync("new_temp.txt",text);

 
