const fs = require('fs');

fs.writeFile('sample.txt' , "Welcome" , (err)=>{
    if(err){
        console.log("Error Creating File" , err);
        return;
    }
    console.log("File Created Successfully")
})


fs.appendFile('sample.txt' , "ehhehe" , (err)=>{
    if(err){
        console.log("Error Updating File" , err);
        return;
    }
    console.log("File Created Successfully")
})

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error occurred while reading file:', err);
    } else {
        console.log('Data read from file:', data);
    }
});


fs.writeFile('delete.txt' , "Welcome" , (err)=>{
    if(err){
        console.log("Error Creating File" , err);
        return;
    }
    console.log("File Created Successfully")
})

// fs.unlink('delete.txt' , (err)=>{
//     if(err){
//         console.log("Error Deleting File" , err);
//         return;
//     }
//     console.log("File Created Successfully")
// })