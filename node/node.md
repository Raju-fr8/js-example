1) Why npm 
   npm is the package manager for the node javascript.npm puts modules in place so node can find them. and manages dependency conflicts.

2) why npm-g, save dev?
   npm -g signifying that to install the particular npm module globally.without g the module would be installed locally.   
   save-dev:
       save-dev adds the third party package to the packages development dependencies
3) why yarn?
   Yarn is installing the packages simultaneously, and that is why Yarn is faster than NPM. They both download packages from npm repository
4) How to upgrade to new express js?
    Upgrade to new express js simply run npm i express@latest --save  
5) How to use old express js?
     remove the current version of express js, type npm uninstall express
6) How to maintain external dependencies?
     Remove unsend dependencies,clean up duplicated packages and keep dependencies up to date. 
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
app.post('/student',(req,res)=>{
    let branchStudentMap = [];
    input.branchStudent.map((branchstudent)=>{
    let branch = input.branch.find((branch) => {return branchstudent.branchId === branch.id})
    let student = input.student.find((student)=> {return branchstudent.studentId === student.id})
    branchStudentMap.push({  
        id: branchstudent.id, branchId: branchstudent.branchId, branchName: branch.name, studentId: branchstudent.studentId, studentName: student.name});
    })
    res.send (branchStudentMap)                   