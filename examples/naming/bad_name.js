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

// What is 'us' and what does 'process' do? Is 'login' boolean, string, or something else?
const us = new MainEntity();
us.process();

if (login) {
  // ... code here
}

// A user object (name, email, age)
let u; // ❌ Too short and unclear
let data; // ❌ Too generic

// User input validation result (true/false)
let v; // ❌ Too short and unclear
let val; // ❌ Abbreviation is unclear
