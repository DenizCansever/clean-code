/**
 * ✅ GOOD NAMING EXAMPLES
 *
 * Benefits of this code:
 * - Clear, descriptive variable names
 * - Self-documenting code
 * - Easy to understand without reading implementation
 */

// Easy to understand the code just by reading the names
const user = new User();
database.insert(user);
if (isLoggedIn) {
  // ✅ Clear boolean variable name
  // ... code here
}

// A user object (name, email, age)
// ⚠️ Okay Names (but could be better)
let userData; // ⚠️ Redundant - you already have user's data inside the constant
let person; // ⚠️ Too unspecific - which person?

// ✅ Good Names
// let user;        // ✅ Descriptive
let customer; // ✅ Even more specific than 'user'

// User input validation result (true/false)
// ⚠️ Okay Names (but unclear boolean nature)
let correct; // ⚠️ Doesn't necessarily imply true/false
let validatedInput; // ⚠️ Doesn't necessarily imply true/false

// ✅ Good Names (clear boolean nature)
let isCorrect; // ✅ Descriptive and value type is clear
let isValid; // ✅ Descriptive and value type is clear
