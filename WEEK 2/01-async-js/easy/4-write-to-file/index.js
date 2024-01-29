// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs');

const data = "Hi there, I am Rohit Singh Rawat";

fs.writeFile('./b.txt', data, 'utf8', (err)=>{
    if(err){
        console.error(err)

    }
    console.log("Data has written successfully");
})