// let x=10;
// module.exports=x

// console.log(f)
// let r=f.readFile("txt.txt",{encoding:"utf8"},(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
//     console.log("arrived")
// })
// console.log("finished")
// console.log(process.argv)


// @ts-ignore


const fs = module.require('fs');
const express = module.require('express')
const bcrypt = module.require('bcrypt');

const app = express();
let todosRoutes=module.require('./routes/todos')
let usersRoutes=module.require('./routes/users')
app.use(express.json());
app.use("/todos",todosRoutes)
app.use("/users",usersRoutes)
// app.use("/todos/count",todosRoutes)


const mongoose = module.require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tasks').then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
    console.log("can not connect")
});


app.listen(3000,()=>{
    console.log("started")
})
// let [,,command]=process.argv;

// if(command=="create"){
//     let title=process.argv[3]
//     let to=JSON.parse(fs.readFileSync("todo.json","utf-8"))
//     to.push({title:title})
//     fs.writeFileSync("todo.json",JSON.stringify(to))
// }else if(command=="list"){
//     let todos=JSON.parse(fs.readFileSync("todo.json","utf-8"))
//     console.log(todos)

// }else if(command=="update"){
//     let oldtitle=process.argv[3];
//     let newtitle=process.argv[4];
//     let to=JSON.parse(fs.readFileSync("todo.json","utf-8"))
//     for (var i=0;i<to.length;i++){
//         if(to[i].title==oldtitle){
//             to[i].title=newtitle
//         }

//     }
//     fs.writeFileSync("todo.json",JSON.stringify(to))
    



// }else if(command=="delete"){

//     let to=JSON.parse(fs.readFileSync("todo.json","utf-8"))
//     while(to.length > 0) {
//         to.pop();
//     }
    
//     fs.writeFileSync("todo.json",JSON.stringify(to))
// }else if(command=="remove"){
//     let title=process.argv[3]
//     let to=JSON.parse(fs.readFileSync("todo.json","utf-8"))
//     for (var i=0;i<to.length;i++){
//         if(to[i].title==title){
//             let index=to.indexOf(to[i])
//             to.splice(index,1)

//         }

//     }
//     fs.writeFileSync("todo.json",JSON.stringify(to))
// }


