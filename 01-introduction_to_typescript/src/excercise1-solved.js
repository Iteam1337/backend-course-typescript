"use strict";
function findMatchingStrings(stringArray, searchQuery) {
    return stringArray === null || stringArray === void 0 ? void 0 : stringArray.filter((s) => s.indexOf(searchQuery || '') != -1);
}
function hasBirthday(birthday, currentDate) {
    return birthday.getMonth() == currentDate.getMonth() && birthday.getDate() == currentDate.getDate();
}
function createPersonInfoMessage(person) {
    const now = new Date();
    const age = now.getFullYear() - person.birthday.getFullYear();
    return `${person.name} is ${age} years old and lives in ${person.homeTown}`;
}
