function findMatchingStrings(stringArray: string[] | undefined, searchQuery: string | undefined): string[] | undefined {
  return stringArray?.filter((s) => s.indexOf(searchQuery || '') != -1);
}

function hasBirthday(birthday:Date, currentDate:Date): boolean {
    return birthday.getMonth() == currentDate.getMonth() && birthday.getDate() == currentDate.getDate();
}

type Person = {
  name: string,
  birthday: Date,
  homeTown: string
}

function createPersonInfoMessage(person: Person): string {
  const now = new Date();
  const age = now.getFullYear() - person.birthday.getFullYear()
  return `${person.name} is ${age} years old and lives in ${person.homeTown}`
}

function addPadding(input: string, padding: string | number) {
  if (typeof padding === 'number') {
      return `${" ".repeat(padding)}${input}`
  } else if (typeof padding === "string") {
      return `${padding}${input}`
  } else {
      throw new Error('Invalid padding - must be string or number!')
  }
}

function double(first: string | number): string | number {
  if (typeof first === 'string') {
    return `${first}${first}`
  } else if (typeof first === 'number') {
    return first * 2
  } else {
    throw new Error('Unexpected type!')
  }
}

