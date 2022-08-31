---
marp: true
theme: default
paginate: true
---

# Introduction to Typescript

## What, why, and how?

---

# Typescript

- Created by Microsoft in 2012
- _Superset_ of JavaScript
- Statically typed
- Can be used _both_ for backend and frontend
- Transpiled to JavaScript

---

# Hello, World!

```typescript
const sayHello = (name: string) => {
  console.log(name);
};

// This is ok
sayHello("Erik");
// This will not work
sayHello(12345);
// Neither will this
let name = null;
sayHello(name);
```

---

# Primitive types

TypeScript have three primitive types: `boolean`, `string`, and `number`.

---

# Primitive types - boolean

```typescript
// Declare a variable that is a boolean set to false
let isDone: boolean = false;

// Same as above - type inferred as boolean at declaration
let isReady = false;

isReady = "no!"; // throws an error
```

---

# Primitive types - string

```typescript
let name: string = "Erik";
name = +" Hellman";

const API_URL = "http://myapp.app/api";

let hello = `Hello, ${name}!`;

hello = 42; // Throws an error!
```

---

# Primitive types - number

```typescript
// There is no difference between decimal or integer numbers in TypeScript!
let amount: number = 45.7;
amount += 10;
amount *= 1.25;

// This will result in an error!
amount = "Does not work!";
```

---

# Using types in functions

```typescript
function createUserInfo(
  name: string, // Name must be a string
  age: number, // Age must be a number
  homeTown: string, // Home town must be a string
  isFemale: boolean // isFemale must be a boolean
): string {
  // The function will return a string
  return `${name} is ${age} years old. ${
    isFemale ? "She" : "He"
  } comes from ${homeTown}`;
}
```

---

# Arrays

```typescript
const data: string[] = []; // An empty string-array
const numbers = [1, 2, 3, 4, 5]; // An array with 5 numbers
const names = new Array<string>(); // Same as first line, just more explicit using generics
```

---

# Object types

```typescript
const person = {
  name: string,
  age: number,
  homeTown: string,
};
```

---

# Using types with functions

```typescript
function createUserInfoMessage(
  name: string,
  age: number,
  homeTown: string
): string {
  return `${name} is ${age} years old and comes from ${homeTown}`;
}

const userInfo = createUserInfoMessage("Erik", 45, "Älvsjö");
const willFail = createUserInfoMessage("Anders", "fiftysix"); // Error! Will not compile!
```

---

# Object types and functions

```typescript
function createUserInfoMessage(userInfo: {name: string, age: number, homeTown: string}): string {
    return `${userInfo.name} is ${userInfo.age} years old and comes from ${userInfo.homeTown}`;
}

const user = {'Erik', 45, 'Älvsjö'}
const userInfo = createUserInfoMessage(user)
```

---

# Optional types

User `?` after parameter name to make them optional

```typescript
function createUserGreeting(userInfo: {
  name: string;
  age?: number;
  homeTown?: string;
}): string {
  const parts = new Array<string>();
  parts.push(`Hello ${userInfo.name}!`);

  if (userInfo.age != undefined) {
    parts.push(`You are ${userInfo.age} years old.`);
  }

  if (userInfo.homeTown != undefined) {
    parts.push(`You come from ${userInfo.homeTown}.`);
  }

  return parts.join(" ");
}
```

---

# Union types

The `|` can be used to specify that a variable, parameter or return value can be one of several types. This is called _union type_ and is a powerful feature in TypeScript.

```typescript
function double(first: string | number): string | number {
  if (typeof first === "string") {
    return `${first}${first}`;
  } else if (typeof first === "number") {
    return first * 2;
  } else {
    throw new Error("Unexpected type!");
  }
}
```

---

# Literal types

Specific strings and numbers can be used as types. This is very useful in function parameters.

```typescript
let text: "hello";
text = "hello"; // This works
text = "howdy"; // Not allowed!

function makeTextParagraph(
  text: string, // Can be any string
  alignment: "left" | "right" | "center" | "justify" // Can only be one of these strings
): string {
  return `<p style="text-align: ${alignment}">${text}<p>`;
}
```

---

# Interface and Type Alias

We can create "templates" for objects using either an interface or a type alias. They are identical in most cases, with the difference that interfaces can be extended (properties and functions added in other places).

```typescript
interface Person {
    name: string,
    age: number,
    homeTown?: string
}
// OR
type Person {
    name: string,
    age: number,
    homeTown?: string
}

const person: Person = {'Erik', 45, 'Älvsjö'}
const error: Person = {"Anders"} // Will fail
```

---

# Generics

A regular array can contain items of any type. With _generics_ you can put a constraint on the type of items you can add.

```typescript
const data: Array<string> = []

data.push('Erik') // Ok!
data.push('Jenny') // Also ok!
data.push(1) // Error
data.push(false) // Also error
data.push({name:'Erik'}) // Also error
```

---

# Generics

You can use generics when declaring variables, classes or functions.

```typescript
function 
```