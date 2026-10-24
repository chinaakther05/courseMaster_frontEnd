
"use strict";

// Problem 1 Staircase
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


// Problem 2 Grading Students
var gradingStudents = function(grades) {
    let result = [];

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];

        if (grade >= 38) {
            let nextMultiple = Math.ceil(grade / 5) * 5;

            if (nextMultiple - grade < 3) {
                grade = nextMultiple;
            }
        }

        result.push(grade);
    }

    return result;
};


// Problem 3 Time Conversion
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


// Problem 4 String Repeat
var repeatStr = function(n, s) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result = result + s;
    }

    return result;
};


// Problem 5 Reversed Strings
var solution = function(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
};


// Problem 6 Sum of Positive
var positiveSum = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }

    return sum;
};


// Problem 7 Grasshopper — Summation
var summation = function(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }

    return sum;
};


// Problem 8 Convert a Boolean to a String
var booleanToString = function(b) {
    return String(b);
};


// Problem 9 Fizz Buzz
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
            result.push(String(i));
        }
    }

    return result;
};


// Problem 10 Running Sum of 1D Array
var runningSum = function(nums) {
    let sum = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        result.push(sum);
    }

    return result;
};


// Problem 11 Richest Customer Wealth
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


// Problem 12 Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


// Problem 13 Contains Duplicate
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


// Problem 14 Move Zeroes
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


// Problem 15 Merge Sorted Array
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


// Problem 16 3Sum
var threeSum = function(nums) {
    let result = [];
    nums.sort(function(a, b) {
        return a - b;
    });

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


// Problem 17 Plus One
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


// Problem 18 Reverse String
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};


// Problem 19 Length of Last Word
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let length = 0;

    while (i >= 0 && s[i] === " ") {
        i--;
    }

    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }

    return length;
};


// Problem 20 Longest Common Prefix
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);

            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
};


