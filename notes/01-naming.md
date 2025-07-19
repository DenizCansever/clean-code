# 📚 Naming Conventions

## Key Principles

- **Names should be meaningful.** They should convey what's stored in a variable or what a function or method does without having to examine the code inside that function or method, or without exploring the value stored in a variable. Names matter.
- There is more than one way to name something, so we will not always agree on the best approach.
- **How to name things correctly:**

## Variables & Constants

**Purpose:** Data containers (e.g., user input data, validation results, a list of products)  
**Naming Convention:** Use nouns or short phrases with adjectives

```js
const userData = {...}
const isValid = true
const productList = [...]
```

## Functions & Methods

**Purpose:** Commands or calculated values (e.g., send data to server, check if user input is valid)  
**Naming Convention:** Use verbs or short phrases with adjectives

```js
sendData();
inputIsValid(); // or isValid()
calculateTotal();
```

## Classes

**Purpose:** Use classes to create "things" (e.g., a user, a product, an HTTP request body)  
**Naming Convention:** Use nouns or short phrases with nouns

```js
class User {...}
class RequestBody {...}
class Product {...}
```

## Name Casing Conventions

| Convention   | Usage                                             | Examples                          |
| ------------ | ------------------------------------------------- | --------------------------------- |
| `snake_case` | Python variables, functions, methods              | `is_valid`, `send_response`       |
| `camelCase`  | Java and JavaScript variables, functions, methods | `isValid`, `sendResponse`         |
| `PascalCase` | Classes in Python, Java, and JavaScript           | `User`, `Product`                 |
| `kebab-case` | Custom HTML elements                              | `<side-drawer>`, `<user-profile>` |

## Naming Guidelines

- **For objects, numbers, or strings:** Describe the value clearly
- **For boolean values:** Create words that answer a true/false question
- **For both:** Provide more details without introducing redundancy
