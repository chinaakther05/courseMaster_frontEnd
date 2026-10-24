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
console.log(gradingStudents([73, 67, 38, 33]));




var timeConversion = function(s) {
    let hour = Number(s.slice(0, 2));
    let period = s.slice(-2);

    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            hour = hour + 12;
        }
    }

    let result = String(hour).padStart(2, "0");

    return result + s.slice(2, 8);
};
console.log(timeConversion("07:05:45PM"));



var repeatString = function(s, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result = result + s;
    }

    return result;
};
console.log(repeatString("abc", 3));
