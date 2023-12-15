#!/usr/bin/node

const dict = require('./101-data').dict;

// Create a new dictionary with user ids sorted by occurrence
const sortedDict = Object.entries(dict).reduce((acc, [userId, occurrences]) => {
  // If the occurrences is not a key in the new dictionary, initialize it as an empty array
  if (!acc[occurrences]) {
    acc[occurrences] = [];
  }

  // Add the user id to the array corresponding to its occurrences
  acc[occurrences].push(userId);

  return acc;
}, {});

// Print the new dictionary
console.log(sortedDict);

