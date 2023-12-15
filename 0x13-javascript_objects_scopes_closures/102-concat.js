#!/usr/bin/node

const fs = require('fs');

// Ensure three command-line arguments are provided
if (process.argv.length !== 5) {
  console.error('Usage: ./102-concat.js fileA fileB fileC');
  process.exit(1);
}

// Read the content of the first source file
const fileAContent = fs.readFileSync(process.argv[2], 'utf-8');

// Read the content of the second source file
const fileBContent = fs.readFileSync(process.argv[3], 'utf-8');

// Concatenate the content of the two source files
const concatenatedContent = fileAContent + fileBContent;

// Write the concatenated content to the destination file
fs.writeFileSync(process.argv[4], concatenatedContent);

