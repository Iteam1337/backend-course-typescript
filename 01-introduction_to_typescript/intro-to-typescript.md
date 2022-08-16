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

