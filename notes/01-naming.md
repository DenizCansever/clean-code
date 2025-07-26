# 📚 Naming Conventions

> **"There are only two hard things in Computer Science: cache invalidation and naming things."** - Phil Karlton

## 🎯 Key Principles

- **Names should be meaningful.** They should convey what's stored in a variable or what a function or method does without having to examine the code inside that function or method, or without exploring the value stored in a variable. **Names matter.**
- There is more than one way to name something, so we will not always agree on the best approach.
- **How to name things correctly:**

## 📦 Variables & Constants

**Purpose:** Data containers (e.g., user input data, validation results, a list of products)  
**Naming Convention:** Use nouns or short phrases with adjectives

### ✅ Good Examples

```js
const userData = {...}
const isValid = true
const productList = [...]
const maxRetryAttempts = 3
const apiBaseUrl = 'https://api.example.com'
```

### ❌ Poor Examples

```js
const data = {...}        // Too generic
const flag = true         // Unclear what it represents
const list = [...]        // What kind of list?
const num = 3             // What number?
const url = '...'         // What URL?
```

## ⚙️ Functions & Methods

**Purpose:** Commands or calculated values (e.g., send data to server, check if user input is valid)  
**Naming Convention:** Use verbs or short phrases with adjectives

### ✅ Good Examples

```js
sendData();
inputIsValid(); // or isValid()
calculateTotal();
getUserByEmail();
validateEmail();
```

### ❌ Poor Examples

```js
process();      // What is being processed?
handle();       // What is being handled?
check();        // What is being checked?
get();          // What is being retrieved?
```

## 🏗️ Classes

**Purpose:** Use classes to create "things" (e.g., a user, a product, an HTTP request body)  
**Naming Convention:** Use nouns or short phrases with nouns

### ✅ Good Examples

```js
class User {...}
class RequestBody {...}
class Product {...}
class EmailValidator {...}
class DatabaseConnection {...}
```

### ❌ Poor Examples

```js
class Data {...}           // Too generic
class Manager {...}        // What does it manage?
class Helper {...}         // What does it help with?
class Utils {...}          // What utilities?
```

## 📝 Name Casing Conventions

| Convention   | Usage                                             | Examples                          |
| ------------ | ------------------------------------------------- | --------------------------------- |
| `snake_case` | Python variables, functions, methods              | `is_valid`, `send_response`       |
| `camelCase`  | Java and JavaScript variables, functions, methods | `isValid`, `sendResponse`         |
| `PascalCase` | Classes in Python, Java, and JavaScript           | `User`, `Product`                 |
| `kebab-case` | Custom HTML elements                              | `<side-drawer>`, `<user-profile>` |
| `UPPER_CASE` | Constants (JavaScript, Python)                    | `MAX_RETRY_ATTEMPTS`, `API_BASE_URL` |

## 🎯 Naming Guidelines

- **For objects, numbers, or strings:** Describe the value clearly
- **For boolean values:** Create words that answer a true/false question
- **For both:** Provide more details without introducing redundancy

## 🔧 Naming Functions & Methods

There are **2 types** of functions:
1. **Functions that perform an operation**
2. **Functions that compute a boolean**

### 1️⃣ Functions That Perform Operations

**Rule:** Describe the operation clearly

#### ✅ Good Examples

```js
getUser()
response.send()
getUserByEmail();        // More specific
sendEmailToUser();       // More specific
calculateTotalPrice();   // More specific
```

#### ❌ Poor Examples

```js
process();              // Very unspecific
handle();               // Very unspecific
doSomething();          // Unclear what it does
```

### 2️⃣ Functions That Compute Booleans

**Rule:** Answer a true/false question

#### ✅ Good Examples

```js
isValid()
purchase.isPaid()
emailIsValid()          // More specific
user.isAuthenticated()  // More specific
order.isComplete()      // More specific
```

#### ❌ Poor Examples

```js
check();                // What is being checked?
validate();             // What is being validated?
process();              // Unclear what it processes
```

## 🏛️ Naming Classes

**Rule:** Describe the object clearly

### ✅ Good Examples

```js
class User {}           // Clear and simple
class Product {}        // Clear and simple
class Customer {}       // More specific than User
class Course {}         // More specific than Product
class EmailValidator {} // Describes its purpose
```

### ❌ Poor Examples

```js
class UEntity {}        // Unclear abbreviation
class ObjA {}           // Meaningless name
class Data {}           // Too generic
class Manager {}        // What does it manage?
class Helper {}         // What does it help with?
```

### 🚫 Avoid Redundant Suffixes

Classes are typically instantiated, so avoid redundant suffixes:

```js
// ❌ Bad - Redundant suffixes
class DatabaseManager {}    // Instantiating a "DatabaseManager" makes no sense
class UserObject {}         // Redundant - classes are already objects
class ProductClass {}       // Redundant - it's already a class

// ✅ Good - Clean and clear
class Database {}           // Clear and simple
class User {}               // Clear and simple
class Product {}            // Clear and simple
```

## 📋 Quick Reference

### Variable Naming Checklist

- [ ] **Descriptive:** Does the name clearly describe what it contains?
- [ ] **Specific:** Is it specific enough to understand its purpose?
- [ ] **Consistent:** Does it follow the project's naming conventions?
- [ ] **Pronounceable:** Can you easily say the name out loud?
- [ ] **Searchable:** Can you easily find it in your codebase?

### Function Naming Checklist

- [ ] **Verb-based:** Does it start with a verb (for operations)?
- [ ] **Question-based:** Does it answer a yes/no question (for booleans)?
- [ ] **Specific:** Does it clearly indicate what it does?
- [ ] **Consistent:** Does it follow the project's naming patterns?

### Class Naming Checklist

- [ ] **Noun-based:** Does it represent a thing or concept?
- [ ] **Clear:** Is it immediately obvious what it represents?
- [ ] **No redundancy:** Does it avoid unnecessary suffixes?
- [ ] **Consistent:** Does it follow the project's naming conventions?

---

> **💡 Remember:** Good naming is an investment in your future self and your team. Take the time to choose meaningful names - it pays off in the long run!
