# Introductio to TypeScript

Here you'll find the first excercises used for learning TypeScript and related tooling. 

## Convert from JavaScript

Convert the following JavaScript functions to TypeScript. Then use the TypeScript compiler to compile the code into JavaScript. Compare the differences between the original JavaScript function and the result from compiling from TypeScript. What additional checks and features can you find?

### Find matching strings in an array

```javascript
/**
 * Returns a new array with all strings that are at least a partial match of the search query.
 * 
 * @param {string[]} stringArray An array of strings
 * @param {string} searchQuery A search query
 */
function findMatchingStrings(stringArray, searchQuery) {
    return stringArray.filter((s) => s.indexOf(searchQuery) != -1)
}
```

