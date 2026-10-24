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


// Problem 5: Reversed Strings
var solution = function(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
};
console.log(solution("world"));


// Problem 6: Sum of Positive
var positiveSum = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }

    return sum;
};
console.log(positiveSum([1, -4, 7, 12]));


// Problem 7: Grasshopper Summation
var summation = function(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }

    return sum;
};
console.log(summation(1));


// Problem 8: Boolean to String
function booleanToString(b) {
    return String(b);
}
console.log(booleanToString(true));
console.log(booleanToString(false));


// Problem 9: Fizz Buzz
var fizzBuzz = function(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
};
console.log(fizzBuzz(15));


// Problem 10: Running Sum of 1D Array
var runningSum = function(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        nums[i] = sum;
    }

    return nums;
};

console.log(runningSum([1, 2, 3, 4]));




// Problem 11: Richest Customer Wealth
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let total = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            total = total + accounts[i][j];
        }

        if (total > maxWealth) {
            maxWealth = total;
        }
    }

    return maxWealth;
};
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));


// Problem 12: Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
console.log(removeDuplicates([1, 1, 2]));



// Problem 13: Contains Duplicate
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));


// Problem 14: Move Zeroes
var moveZeroes = function(nums) {
    let position = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[position] = nums[i];
            position++;
        }
    }

    while (position < nums.length) {
        nums[position] = 0;
        position++;
    }
};
console.log(moveZeroes([0, 1, 0, 3, 12]));


// Problem 15: Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));


// Problem 16: 3Sum
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));


// Problem 17: Plus One
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    digits.unshift(1);

    return digits;
};
console.log(plusOne([1, 2, 3]));


