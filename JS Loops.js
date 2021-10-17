for(let i = 1; i <= 10; i++){
    console.log('HELLO:', i);
}
//Exam SCores Example


const examScores = [ 98, 77, 84, 91, 57, 66 ]

for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
}


//Test Scores: Lopping with Array

const myStudents = [
    {
        firstName : 'Sione',
        grade : 86
    },
    {
        firstName : 'Lola',
        grade : 90
    },
    {
        firstName : 'Latu',
        grade : 91
    },
    {
        firstName : 'Apolosi',
        grade : 84
    }
];

for(let i = 0; i < myStudents.length; i++){
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}

//Averaging grades
let total = 0;

for(let i = 0; i < myStudents.length; i++){
    let student = myStudents[i];
    total += student.grade;
}
console.log(`The average grade is ${total/myStudents.length}`);

//FOR... OF (NOT IN IE)

let topiki =[ 'Siasi', 'Puleanga', 'Houeiki', 'Ako'];

for (let sub of topiki){
    console.log(sub); 
}


