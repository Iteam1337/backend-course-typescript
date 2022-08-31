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
    console.log(name)
}

// This is ok
sayHello('Erik')
// This will not work
sayHello(12345)
// Neither will this
let name = null
sayHello(name)
```

---

# Basic types - boolean

```typescript
// Declare a variable that is a boolean set to false
let isDone: boolean = false;

// Same as above - type inferred as boolean at declaration
let isReady = false

isReady = 'no!' // throws an error
```

---

# Basic types - string

```typescript
let name: string = 'Erik'
name =+ ' Hellman'

const API_URL = 'http://myapp.app/api'

let hello = `Hello, ${name}!`

hello = 42 // Throws an error!
```
---

# Basic types - number

```typescript
let amount: number = 45.7
amount += 10
amount *= 1.25

// This will result in an error!
amount = 'Does not work!'
```

---

# Arrays 

```typescript
let data: string[] = [] // An empty string-array
let numbers = [1,2,3,4,5] // An array with 5 numbers
```

---

# 