Lotide
A mini clone of the Lodash library.

Purpose
BEWARE: This library was published for learning purposes. It is not intended for use in production-grade software.

This project was created and published by me as part of my learnings at Lighthouse Labs.

Usage
Install it:

npm install @NickCoconut/lotide

Require it:

const _ = require('@NickCoconut/lotide');

Call it:

const results = _.tail([1, 2, 3]) // => [2, 3]

Documentation
The following functions are currently implemented:

head: find the first element in an array
tail: return an array without the first element
middle: find the middle element in an array
assertArraysEqual: compare two array
assertEqual: compare two inputs
countLetters: count how many letter in a string
countOnly: count occurrence of element
eqArrays: compare array
eqObjects: compare object
findKey: find the key in an object
findKeyByValue: find the key according to the value
letterPositions: find the index of letters
map: loop through array and modify each element
takeUntil: return array that satisfy the condition
without: remove common element in two array