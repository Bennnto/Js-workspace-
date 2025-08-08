# COMP1235 Assignment 4
## Introduction to Full Stack Development

---

## Assignment Details

**Assignment Type:** Individual Assignment

### Description
In this assignment, you are to develop a JavaScript file (`solution.js`) that contains the implementation of 5 Async/Await functions. Each function is represented as one step, and marks will be awarded on the completion of each step (each function).

Each function is independent and solves a unique problem, as such, treat and implement each function in isolation of the others, that is, you should only focus on one problem at a time.

**PLEASE NOTE:** Unless indicated within the question(s), input validation is NOT required for a functions input parameter – You may assume that all input parameters provided to your functions, are valid.

### Objective
- Write decision-making statements and control structures to solve problems
- Apply programming logic to solve basic to intermediate problems
- Testing and debugging

### Learning Outcomes
After conducting this assignment students will/will be able to:
1. Acquainted with implementing Promises, Async/Await JavaScript functions
2. Follow instructions, and to implement various requirements
3. Acquainted with testing Asynchronous JavaScript unit tests to validate their functions
4. Retrieve and fetch data from API using JavaScript

---

## Async Function 1: Random Number

### `getRandomNumber()`

Create a JavaScript function that meets the following requirements:

- Write an asynchronous function called `getRandomNumber` that returns a promise
- In the promise, write a `setTimeout()` that will:
  - resolve the promise with a random number after .5 seconds
- The random number should be within the range 1-5
- To test this in your unit test, please review the chai assertion library for you can range testing (`to.be.within()`) – [Chai Documentation](https://www.chaijs.com/api/bdd/)
- The function should pass the illustrated test examples below at a minimum.

**Expected Output:**
```javascript
getRandomNumber() → returns a random number between 1-5
```

---

## Async Function 2: get Nationality

### `getNationality(name)`

Create a JavaScript function that meets the following requirements:

- Write an asynchronous function (using async/await) called `getNationality` that returns a promise
- The function takes 1 parameter (string representing the name)
- When invoked the function should retrieve the data associated with the name, calling the URL with the following URL / URL pattern:
  - `https://api.nationalize.io/?name=${name}`
  - You will need to use a fetch to call the nationalize.io json api
- Once retrieved, test the data contains the most probable nationality of the someone with this name
- The function should pass the illustrated test examples below at a minimum.

**Expected Output:**
```javascript
getNationality("Daniil") → "GR"
getNationality("Laily") → "ID"
getNationality("Mark") → "CN"
```

---

## Async Function 3: Fetch Product

### `fetchProduct(id)`

Create a JavaScript function that meets the following requirements:

- Write an asynchronous function (using async/await) called `fetchProducts` that returns a promise
- The function takes 1 parameter (a product id)
- When invoked the function should retrieve the data associated with the product, calling the URL with the following URL / URL pattern:
  - `https://dummyjson.com/products/{id}`
  - **PLEASE NOTE** → replace id with the product id being queried
  - You will need to use a fetch to call the dummy json api
- Your function should throw an Error (`throw new Error`) if the response to the fetch is not okay
- Encapsulate your fetch within a try/catch block, that responds with `Could not get products: Error: {error}` if an error is caught.
- Once retrieved, test the product name (ie product title)
- The function should pass the illustrated test examples below at a minimum.

**Expected Output:**
```javascript
fetchProducts(1)  → "Essence Mascara Lash Princess"
fetchProducts(12) → "Annibale Colombo Sofa"
fetchProducts(50) → "Black Whisk"
```

---

## Async Function 4: Search Store Price

### `searchStorePrice(product_name)`

Create a JavaScript function that meets the following requirements:

- Write an asynchronous function (using async/await) called `searchStorePrice` that returns a promise
- The function takes 1 parameter (a product name)
- When invoked the function should retrieve the data associated with the product, calling the URL with the following URL / URL pattern:
  - `https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`
  - You will need to use a fetch to call the json api
- Your function should throw an Error (`throw new Error`) if the response to the fetch is not okay
- Encapsulate your fetch within a try/catch block, that responds with `Could not get products {error}` if an error is caught.
- Once the inventory is retrieved, your function must utilize `Array.prototype.find()` to locate the product with the passed, then return the price associated with the product back to the caller.
- The function should pass the illustrated test examples below at a minimum.

**Expected Output:**
```javascript
searchStoreProduct("chicken noodle soup")  → 1.89
searchStoreProduct("tomato soup")          → 1.40
searchStoreProduct("spam")                 → 2.85
searchStoreProduct("refied beans")         → 0.99
```

---

## Async Function 5: Star Wars API

### `getStarWarsCharacters()`

Create a JavaScript function expression that meets the following requirements:

- Write an asynchronous function (using async/await) called `getStarWarsCharacters`
- When invoked the function will make a call to the Star War API (`https://swapi.dev/api/people/`)
- Once the Star Wars data is retrieved, you are to:
  - Create new json collection with the data
  - The key for each element json element in the collection, is the character's name
  - The value for each element in the collection, is the characters URL (Please inspect data return from API)
  - Return this newly constructed JSON object back to the caller
- Your function must utilize `Array.prototype.forEach()` when constructing JSON collection
- The function should pass the illustrated test examples below at a minimum.

**Expected Output:**
```javascript
getStarWarsCharacters().characters["R2-D2"]          → "https://swapi.dev/api/people/3/"
getStarWarsCharacters().characters["C-3PO"]          → "https://swapi.dev/api/people/2/"
getStarWarsCharacters().characters["Luke Skywalker"] → "https://swapi.dev/api/people/1/"
```

---

## Submission Procedure and Rules

Please ensure to remove all instances of the following from your final submission solution:
- any commented code
- Do not over use the console log, spamming the console log unnecessarily, say for example with debug related output may cost you marks.

### Submission Procedure

Please refer to [Development and Submissions Instructions](https://github.com/s25gbc/comp1235/blob/main/assignment4/development-and-submissions-instructions.md) for further instructions.

### Additional Submission Requirements

Late submissions are graded at a penalty per day (five day maximum) **-20%**

We are going to use Moss (https://theory.stanford.edu/~aiken/moss/) to detect similarities in code among all students. There will be zero tolerance for plagiarism. Please be aware.

---

**GOOD LUCK!**
