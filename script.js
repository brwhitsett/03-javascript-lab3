"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
addSubmission(submissions, "Jason", 45, "2018-28-09");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};

// deleteSubmissionByName(submissions, "Jason");

const editSubmission = (array, index, score) => {
  // submissions[4].name = 100
  array[index].score = score;
  // submissions.passed = true
  array[index].passed = score >= 60;
};

editSubmission(submissions, 4, 100);
console.log(submissions);

const findSubmissionByName = (array, name) => {
  return array.find((arr) => {
    return arr.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Joe"));

// Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

const findLowestScore = (array) => {
  let lowest = array[0];
  array.forEach((submission) => {
    if (submission.score < lowest.score) {
      lowest = submission;
    }
  });
  return lowest;
};
console.log(findLowestScore(submissions));

// Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

const findAverageScore = (array) => {
  let sum = 0;
  for (let quiz of array) {
    sum += quiz.score;
  }
  return sum / array.length;
};
console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  let passed = array.filter((item) => {
    return item.passed;
  });
  return passed;
};
console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  let score = array.filter((item) => {
    return item.score >= 90;
  });
  return score;
};
console.log(filter90AndAbove(submissions));
