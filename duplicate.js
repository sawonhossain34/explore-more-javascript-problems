const allStudents = ['abul','babul','kabul','nabil','kabil','abul','babul','hasan','alamin','sawon','alamin','fahim','sawkot','fahim'];

function studentNotDuplicate(students){
let alternet = [];
for(let i = 0; i < students.length; i++){
    const element = students[i];
    if(alternet.includes(element) === false){
        alternet.push(element);
    }
}

return alternet;
}

const alternet = studentNotDuplicate(allStudents);
console.log(alternet);