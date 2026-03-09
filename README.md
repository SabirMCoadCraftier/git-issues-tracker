## 1. Difference between `var`, `let`, and `const`

`var`, `let`, and `const` are used to declare variables in JavaScript, but they have different behaviors.

### var
- Function scoped
- Can be **redeclared** and **updated**
- Hoisted and initialized with `undefined`

```javascript
var x = 10;
var x = 20; 
```

### let
- Block scoped
- Can be **updated**
- Cannot be **redeclared in the same scope**

```javascript
let y = 10;
y = 20; 
```

### const
- Block scoped
- Cannot be **updated**
- Cannot be **redeclared**
- Must be initialized when declared

```javascript
const z = 30;
```

---

## 2. What is the Spread Operator ?

The spread operator is used to expand elements of an array or object into individual elements.

Example:

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
// Output: [1, 2, 3, 4, 5]
```

It is commonly used for:
- Copying arrays
- Merging arrays
- Passing multiple arguments

---

## 3. Difference between `map()`, `filter()`, and `forEach()`

These are common JavaScript array methods used to iterate over arrays.

### map()
- Returns a **new array**
- Transforms each element

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
```

### filter()
- Returns a **new array**
- Includes elements that match a condition

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
```

### forEach()
- Executes a function for each element
- **Does not return a new array**

```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => {
  console.log(num);
});
```

---

## 4. What is an Arrow Function?

An arrow function is a shorter syntax for writing functions in JavaScript using .

Example:

```javascript
const add = (a, b) => {
  return a + b;
};
```

---

## 5. What are Template Literals?

Template literals are a way to create strings in JavaScript using **backticks (` `)**.  

Example:

```javascript
const name = "Sabir";
const message = `Hello, my name is ${name}`;

console.log(message);
```

Output:

```
Hello, my name is Sabir
```

They are useful for:
- String interpolation
- Multi-line strings
- Cleaner string formatting

---
