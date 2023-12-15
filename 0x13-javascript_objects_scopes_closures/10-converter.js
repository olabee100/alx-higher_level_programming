#!/usr/bin/node

exports.converter = function (base) {
  return function (number) {
    // Use the toString method to convert the number to the specified base
    return number.toString(base);
  };
};

