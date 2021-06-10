const {readFile,writeFile} = require('fs').promises;

const start = async()=>{
    try {
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile(`./content/result-mind-grenade.txt`,`This IS AWESOME  ${first}, ${second}`,{flag:'a'});
        console.log(first);
        console.log(second);
    } catch (error){
        console.log(error);
    }
}

start();

//getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err));



//
// const getText = (path)=>{
//     return new Promise((resolve, reject) =>{
//
//         readFile(path,'utf8',(err, data) => {
//             if (err)
//                 reject(err);
//             else {
//                 resolve(data);
//             }
//         });
//     } );
// }




// const start = async()=>{
//     try {
//         const first = await readFilePromise('./content/first.txt','utf8');
//         const second = await readFilePromise('./content/second.txt','utf8');
//         await writeFilePromise(`./content/result-mind-grenade.txt`,`This IS AWESOME  ${first}, ${second}`);
//         console.log(first);
//         console.log(second);
//     } catch (error){
//         console.log(error);
//     }
// }


// const {readFile, writeFile} = require('fs');
//
// readFile('./content/first.txt','utf-8',(err,result)=>{
//     if(err) {
//         console.log(err);
//         return
//     }
//     const first = result;
//     readFile('./content/second.txt','utf-8', (err,result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result;
//         writeFile(
//             './content/result-async.txt',
//             `here is the result: ${first}, ${second}`,
//             (err,result)=>{
//                 if(err) console.log(err);
//                 console.log(result);
//                 console.log("done with this task")
//             }
//         )
//     } )
// } )
// console.log("starting next task")