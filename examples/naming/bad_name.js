// ❌ POOR NAMING EXAMPLES
// This file demonstrates common variable naming mistakes and anti-patterns
// Use these examples to understand what NOT to do when naming variables

// ============================================================================
// ORIGINAL EXAMPLES WITH ENHANCED STYLING
// ============================================================================

/**
 * ❌ BAD NAMING EXAMPLES
 *
 * Problems with this code:
 * - 'us' is unclear - what does it represent?
 * - 'MainEntity' is too generic - what type of entity?
 * - 'process()' doesn't tell us what it does
 * - 'login' could be boolean, string, or object - unclear type
 * - Single letter variables ('u', 'v') are meaningless
 * - 'data' is too generic - what kind of data?
 */

// ❌ What is 'us' and what does 'process' do? Is 'login' boolean, string, or something else?
const us = new MainEntity();
us.process();

if (login) {
  // ... code here
}

// ❌ A user object (name, email, age)
let u; // ❌ Too short and unclear
let userData; // ❌ Too generic

// ❌ User input validation result (true/false)
let v; // ❌ Too short and unclear
let val; // ❌ Abbreviation is unclear

// ============================================================================
// FUNCTION NAMING MISTAKES
// ============================================================================

// ❌ save user data to a database
process(); // ❌ Very unspecific - what is being processed?
handle(); // ❌ Very unspecific - what is being handled?

// ❌ validate the user input
process(); // ❌ Unspecific process
save(); // ❌ Misleading (save happens after process)

// ============================================================================
// CLASS NAMING MISTAKES
// ============================================================================

// ❌ a user
class UEntity {} // ❌ Unclear abbreviation
class ObjA {} // ❌ Meaningless name

// ❌ a database
class Data {} // ❌ Not clear that we're describing a database
class DataStorage {} // ❌ Not clear that we're describing a database

// ============================================================================
// ADDITIONAL COMMON MISTAKES
// ============================================================================

// ❌ Too generic - doesn't tell us what the variable contains
const data = { name: 'John', age: 30 };
const list = ['apple', 'banana', 'orange'];
const flag = true;
const num = 42;
const str = 'hello world';

// ❌ Unclear abbreviations - hard to understand
const usr = { id: 1, name: 'John' };
const pwd = 'secret123';
const tmp = { temp: 'temporary data' };
const arr = [1, 2, 3, 4, 5];

// ❌ Single letter variables - no context
const x = 10;
const y = 20;
const i = 0;
const j = 1;

// ❌ Very unspecific function names
function process() {
  // Process something...
  return true;
}

function handle() {
  // Handle something...
  return true;
}

function doSomething() {
  // Do something...
  return true;
}

function check() {
  // Check something...
  return true;
}

// ❌ Redundant suffixes - classes are already objects
class UserObj {
  constructor() {
    // User object constructor
  }
}

class ProductClass {
  constructor() {
    // Product class constructor
  }
}

// ❌ Too generic configuration
const config = {
  url: 'https://api.example.com',
  key: 'abc123',
  timeout: 5000,
  retries: 3,
  flag: true,
};

// ❌ Generic parameter names
function processData(data) {
  // Process the data
  return data;
}

function calculate(a, b, c) {
  return a + b * c;
}

function validate(x, y, z) {
  return x && y && z;
}

// ============================================================================
// COMMON ANTI-PATTERNS TO AVOID
// ============================================================================

// ❌ Hungarian notation (outdated)
const strName = 'John';
const intAge = 30;
const boolIsActive = true;

// ❌ Inconsistent naming
const userName = 'John';
const user_age = 30; // Mixed camelCase and snake_case
const UserEmail = 'john@example.com'; // Mixed camelCase and PascalCase

// ❌ Overly abbreviated
const usrProf = { name: 'John', age: 30 };
const prodLst = ['apple', 'banana'];
const authTok = 'abc123';

// ❌ Misleading names
const isValid = false; // Boolean is false but name suggests it's valid
const isEmpty = ['item1', 'item2']; // Array has items but name suggests it's empty

// ============================================================================
// SUMMARY OF MISTAKES
// ============================================================================

/*
❌ COMMON NAMING MISTAKES TO AVOID:

1. Too Generic Names:
   - data, list, flag, num, str
   - Use specific names that describe the content

2. Unclear Abbreviations:
   - usr, pwd, tmp, arr
   - Use full words unless abbreviations are widely understood

3. Single Letter Variables:
   - x, y, i, j (except in loops)
   - Use descriptive names that explain the purpose

4. Generic Function Names:
   - process(), handle(), check()
   - Use specific verbs that describe the action

5. Redundant Suffixes:
   - UserObj, ProductClass
   - Classes are already objects, no need for redundant suffixes

6. Inconsistent Naming:
   - Mixing camelCase, snake_case, PascalCase
   - Stick to your language's conventions

7. Misleading Names:
   - isValid = false, isEmpty = ['item1']
   - Names should accurately reflect the content
*/
