const express = require('express');
let bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.get('/hello',(req,res)=>{
        const name = req.query.name
        console.log('hello '+name)
    });  

app.post('/hello',(req,res)=>{
         res.json({
         name : 'hello '+req.body.name
         })
});
      
app.post('/student',(req,res)=>{
    var input = {
        branchStudent: [
            { id: 1, branchId: 1, studentId: 1 },
            { id: 2, branchId: 2, studentId: 2 },
            { id: 3, branchId: 2, studentId: 1 },
            { id: 4, branchId: 1, studentId: 3 }
        ],
        branch: [
            { id: 1, name: "CSE" },
            { id: 2, name: "IT" }
        ],
        student: [
            { id: 1, name: "Jay" },
            { id: 2, name: "Sanjay" },
            { id: 3, name: "Rajesh" }
        ]
    };

    let branchStudentMap = [];
    input.branchStudent.map((branchstudent)=>{
    let branch = input.branch.find((branch) => {return branchstudent.branchId === branch.id})
    let student = input.student.find((student)=> {return branchstudent.studentId === student.id})
    branchStudentMap.push({  
        id: branchstudent.id, branchId: branchstudent.branchId, branchName: branch.name, studentId: branchstudent.studentId, studentName: student.name});
    })
    res.send (branchStudentMap)
})

app.listen(3000,()=>{
    console.log('port is listening 3000')
})