// ✅ GOOD NAMING EXAMPLES
// This file demonstrates proper variable naming practices and best patterns
// Use these examples as a reference for writing clean, readable code

// ============================================================================
// ORIGINAL EXAMPLES WITH ENHANCED STYLING
// ============================================================================

/**
 * ✅ GOOD NAMING EXAMPLES
 *
 * Benefits of this code:
 * - Clear, descriptive variable names
 * - Self-documenting code
 * - Easy to understand without reading implementation
 */

// ✅ Easy to understand the code just by reading the names
const newUser = new User();
database.insert(newUser);
if (isLoggedIn) {
  // ✅ Clear boolean variable name
  // ... code here
}

// ============================================================================
// VARIABLE NAMING BEST PRACTICES
// ============================================================================

// ✅ A user object (name, email, age)
// ⚠️ Okay Names (but could be better)
let userData; // ⚠️ Redundant - you already have user's data inside the constant
let person; // ⚠️ Too unspecific - which person?

// ✅ Good Names
let user; // ✅ Descriptive
let customer; // ✅ Even more specific than 'user'

// ✅ User input validation result (true/false)
// ⚠️ Okay Names (but unclear boolean nature)
let correct; // ⚠️ Doesn't necessarily imply true/false
let validatedInput; // ⚠️ Doesn't necessarily imply true/false

// ✅ Good Names (clear boolean nature)
let isCorrect; // ✅ Descriptive and value type is clear
let isValid; // ✅ Descriptive and value type is clear

// ============================================================================
// FUNCTION NAMING BEST PRACTICES
// ============================================================================

// ✅ save user data to a database
// ⚠️ Okay names
save(); // ⚠️ At least we know that something is saved - but what?
storeData(); // ⚠️ At least we know that something is saved - but what?

// ✅ Good names
saveUser(); // ✅ The intent is very clear - especially with the method
user.store(); // ✅ The intent is very clear - especially with the method

// ✅ validate the user input
// ⚠️ Okay names
validateSave(); // ⚠️ Not specific
check(); // ⚠️ Not specific

// ✅ Good names
validate(); // ✅ Makes sense - depends on what the function does exactly (we will use it if we pop up after or failed at validate)
isValid();

// ============================================================================
// CLASS NAMING BEST PRACTICES
// ============================================================================

// ✅ A user
// ⚠️ Okay names
class UserObj {} // ⚠️ Have redundant information
class AppUser {} // ⚠️ Have redundant information

// ✅ Good names
class User {} // ✅ Fine naming
class Admin {} // ✅ If it's a more specific kind of user

// ✅ A database
// ⚠️ Okay names
class Db {} // ⚠️ Not specific naming 100%
class Data {} // ⚠️ Not specific naming 100%

// ✅ Good names
class Database {} // ✅ Good enough
class SQLDatabase {} // ✅ Even better

// ============================================================================
// ADDITIONAL BEST PRACTICES
// ============================================================================

// ✅ Descriptive and specific - clearly indicates what the variable contains
const userProfile = { name: 'John', age: 30 };
const productList = ['apple', 'banana', 'orange'];
const isAuthenticated = true;
const maxRetryAttempts = 42;
const welcomeMessage = 'hello world';

// ✅ Clear and meaningful - no abbreviations
const currentUser = { id: 1, name: 'John' };
const userPassword = 'secret123';
const temporaryData = { temp: 'temporary data' };
const orderItems = [1, 2, 3, 4, 5];

// ✅ Contextual names - clear what they represent
const coordinateX = 10;
const coordinateY = 20;
const loopIndex = 0;
const nestedLoopIndex = 1;

// ✅ Specific operation names - clear what the function does
function saveUserToDatabase() {
  // Save user data to database
  return true;
}

function handleUserAuthentication() {
  // Handle user authentication process
  return true;
}

// ✅ Boolean functions answer yes/no questions
function isUserValid() {
  // Check if user data is valid
  return true;
}

function hasPermission() {
  // Check if user has required permission
  return true;
}

// ✅ Action-oriented names with clear purpose
function validateEmailAddress() {
  // Validate email address format
  return true;
}

function calculateTotalPrice() {
  // Calculate total price including tax
  return 0;
}

// ✅ Clear and simple - describes what the class represents
class Product {
  constructor() {
    // Product class constructor
  }
}

// ✅ Specific when needed - more descriptive than generic
class Customer extends User {
  constructor() {
    super();
    // Customer-specific constructor
  }
}

class Course extends Product {
  constructor() {
    super();
    // Course-specific constructor
  }
}

// ✅ Purpose-specific names
class EmailValidator {
  constructor() {
    // Email validator constructor
  }
}

class DatabaseConnection {
  constructor() {
    // Database connection constructor
  }
}

// ✅ Clear and specific - describes what the configuration is for
const apiConfiguration = {
  apiBaseUrl: 'https://api.example.com',
  apiKey: 'abc123',
  requestTimeout: 5000,
  maxRetryAttempts: 3,
  enableLogging: true,
};

// ✅ Descriptive constant names
const MAX_RETRY_ATTEMPTS = 100;
const MIN_PASSWORD_LENGTH = 8;
const DEFAULT_USER_ROLE = 'user';

// ✅ Descriptive parameter names
function processUserData(userData) {
  // Process user data with clear parameter name
  return userData;
}

// ✅ Clear parameter names that explain their purpose
function calculateTotalPrice(basePrice, taxRate, discountAmount) {
  return basePrice * (1 + taxRate) - discountAmount;
}

// ✅ Boolean parameters answer questions
function validateUser(userData, isStrictMode) {
  return userData && isStrictMode;
}

// ✅ Boolean variables answer yes/no questions
const isUserActive = true;
const hasValidEmail = true;
const canAccessAdminPanel = false;
const shouldSendNotification = true;

// ✅ Boolean functions follow the same pattern
function isEmailValid(email) {
  return email.includes('@');
}

function hasRequiredPermissions(user) {
  return user.permissions.includes('admin');
}

function canEditPost(user, post) {
  return user.id === post.authorId || user.role === 'admin';
}

// ✅ Plural names for arrays
const userList = ['user1', 'user2', 'user3'];
const productCategories = ['electronics', 'clothing', 'books'];
const shoppingCartItems = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
];

// ✅ Descriptive object names
const userSettings = {
  theme: 'dark',
  language: 'en',
  notifications: true,
};

const apiResponse = {
  status: 'success',
  data: userList,
  timestamp: new Date(),
};

// ✅ Descriptive loop variable names
for (let userIndex = 0; userIndex < userList.length; userIndex++) {
  const currentUser = userList[userIndex];
  // Process current user
}

// ✅ Nested loop naming
for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
  for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
    const currentCell = matrix[rowIndex][columnIndex];
    // Process current cell
  }
}

// ✅ ForEach with descriptive names
userList.forEach((currentUser, userIndex) => {
  // Process current user at userIndex
});

// ✅ Clear temporary variable names
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  const finalPrice = originalPrice - discountAmount;
  return finalPrice;
}

// ✅ Intermediate calculation names
function validateEmailFormat(emailAddress) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidFormat = emailRegex.test(emailAddress);
  return isValidFormat;
}

// ============================================================================
// SUMMARY OF BEST PRACTICES
// ============================================================================

/*
✅ NAMING BEST PRACTICES TO FOLLOW:

1. Be Descriptive and Specific:
  - userProfile instead of data
  - productList instead of list
  - isAuthenticated instead of flag

2. Use Full Words:
  - user instead of usr
  - password instead of pwd
  - temporary instead of tmp

3. Make Boolean Names Answer Questions:
  - isUserActive, hasPermission, canEdit
  - Use is/has/can/should prefixes

4. Use Verbs for Functions:
  - saveUser(), validateEmail(), calculateTotal()
  - Be specific about what the function does

5. Use Nouns for Classes:
  - User, Product, Database
  - Avoid redundant suffixes like UserObj

6. Be Consistent:
  - Stick to camelCase for variables/functions
  - Use PascalCase for classes
  - Use UPPER_CASE for constants

7. Make Names Self-Documenting:
  - Names should explain what they contain
  - Avoid comments that just repeat the name
  - Choose names that make code readable
*/
