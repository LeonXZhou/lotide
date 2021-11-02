# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @leonzhou9722/lotide`

**Require it:**

`const _ = require('@leonzhou9722/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(array1,array2)`: takes in two arrays and assess if they are equal
* `assertEqual(a,b)`: takes in 2 primitive values and assess if they are equal
* `assertObjectsEqual(obj1, obj2)`: takes in 2 objects and assess if they are equal
* `countLetters(string)`: takes in a string and returns the number of letter in it
* `countOnly(array1, {item1:true, item2:false, ...itemN: true})`: takes in an array and an object containting items marked false or true. returns an objec with the number of occurences of items marked true in the array.
* `eqArrays(arr1, arr2)`: deep comparison of weather 2 arrays are equal
* `findKeys(obj1, (key) => true/false)`: takes a object in and a callback function callback function will inspect each property of the object and the key of the first property that evaluates to true will be returned.
* `findKeyByValue(obj, value)`: returns the first key to a property that evaluates to value.
* `head(arr)`: takes an array in and returns the first element
* `letterPositions(searchstring, targetChar)`: takes in a string with a single character. returns the positions of its occurence in an array.
* `map(arr, callback)`: manipulates each element of arr based on supplied callback functions. 
* `middle(arr)`: returns the middle elements of an array. middle 2 for even length 1 for odd length.
* `tail(arr)`: returns the input arr without the first element
* `takeUntil(arr, callback)`: evaluates each element of arr with the callback function. Returns a copy of the array from index 0 to the the first index where the callback evaluates to true.
* `without(searchArray, targetArray)`: removes all elements of targetArray that occurs in searchArray. 
