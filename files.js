//fs = file system

const fs = require('fs');
const { console } = require('inspector');


//reading files
// fs.readFile('./docs/blog1.txt', (error,data)=> {
//   if(error){
//     console.log(error)
//   }
//   console.log(data.toString())
// })
// console.log('last line')

//writing files
// fs.writeFile('./docs/blog1.txt', 'Hello, world',()=>{
//   console.log('file was written')
// })

// fs.writeFile('./docs/blog2.txt', 'Hello, Canada',()=>{
//   console.log('file was written')
// })
//directories
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder created');
//   });
// } else {
//   fs.rmdir('./assets', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   });
// }

//reading files


if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}

