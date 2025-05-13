let input = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

let output = input.map(studentObj => {
    const studentName = Object.keys(studentObj)[0];
    const subjects = Object.values(studentObj[studentName]);
    const average = subjects.reduce((sum, score) => sum + score, 0) / subjects.length;
    
    return {
        [studentName]: {
            average: Math.round(average)
        }
    };
});

console.log(output);

