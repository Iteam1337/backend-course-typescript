/**
 * Returns a new array with all strings that are at least a partial match of the search query.
 *
 * @param {string[]} stringArray An array of strings
 * @param {string} searchQuery A search query
 */
function findMatchingStrings(stringArray, searchQuery) {
    return stringArray.filter(function (s) { return s.indexOf(searchQuery) != -1; });
}

/**
 * Return true if the person ishaving a birthday today, false otherwise
 * 
 * @param {Date} birthday 
 * @param {Date} currentDate 
 * @returns true if birthday and currentDate have the same month and day-of-month
 */
function hasBirthday(birthday, currentDate) {
    return birthday.getMonth() == currentDate.getMonth() && birthday.getDate() == currentDate.getDate();
}

/**
 * Create a greetings message of for an object with properties for a person
 * 
 * @param {Person} person An object containing a persons name (string), birthday (Date) and homeTown (string)
 * @returns A string with a greeting
 */
function createPersonInfoMessage(person) {
    const now = new Date();
    const age = now.getFullYear - person.birthday.getFullYear()
    return `${person.name} is ${age} years old and lives in ${person.homeTown}`
}

/**
 * Adds padding number of spaces (if padding is a number), or concatenates the padding to the input (if it is a string)
 * 
 * @param {string} input 
 * @param {string | number} padding 
 * @returns A padded string
 */
function addPadding(input, padding) {
    if (typeof padding === 'number') {
        return `${" ".repeat(padding)}${input}`
    } else if (typeof padding === "string") {
        return `${padding}${input}`
    } else {
        throw new Error('Invalid padding - must be string or number!')
    }
}