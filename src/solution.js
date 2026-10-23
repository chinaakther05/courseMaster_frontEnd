var staircase = function(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        result += " ".repeat(n - i) + "#".repeat(i);

        if (i < n) {
            result += "\n";
        }
    }

    return result;
};
console.log(staircase(4));




var gradingStudents = function(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            let nextMultiple = Math.ceil(grades[i] / 5) * 5;

            if (nextMultiple - grades[i] < 3) {
                grades[i] = nextMultiple;
            }
        }
    }

    return grades;
};
