// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
let strTrimmer = (str)=>{
    let Str2 = str;
    Str2 = Str2.replace(/\s+/g, " ");
    return  Str2.trim(); 
}

fs.readFile('a.txt', 'utf-8', (err, data)=>{
    if (err) {
        console.error(err);
    }
    else {
        let str = data;
        str = strTrimmer(str)
        fs.writeFile('a.txt', str, 'utf-8', (err) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log('The file has been rewritten.');
            }
        });
    }
    
})