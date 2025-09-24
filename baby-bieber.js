"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Problem: Searching for whole word "baby" in strings
 *
 * The challenge is to find complete word matches, not substring matches.
 * For example, "baby" should match in "baby!", "Baby", or "my baby is"
 * but should NOT match in "babysit", "Babylon", or "baby-sitter" where
 * "baby" appears as part of a larger word. We need to ensure word boundaries
 * are respected by checking that "baby" is surrounded by non-letter characters
 * or appears at the beginning/end of the string.
 */
const baby_bieber_lyrics_1 = __importDefault(require("./baby-bieber-lyrics"));
/**
 * Checks if any string in the array contains the whole word "baby" (case-insensitive)
 * Uses word boundary regex to ensure we match complete words only
 * @param lines - Array of strings to search through
 * @returns true if any string contains "baby" as a whole word, false otherwise
 */
function hasBaby(lines) {
    // Use word boundary regex to match "baby" as a complete word only
    const wordPattern = /\bbaby\b/i;
    return lines.some(line => wordPattern.test(line));
}
/**
 * Counts the total number of "baby" word occurrences across all strings in the array
 * Uses word boundary regex and global flag to find all instances
 * @param lines - Array of strings to search through
 * @returns number of "baby" word occurrences found
 */
function numBaby(lines) {
    // Use word boundary regex with global flag to find all occurrences
    const wordPattern = /\bbaby\b/gi;
    return lines
        .map(line => {
        const matches = line.match(wordPattern);
        return matches ? matches.length : 0;
    })
        .reduce((total, count) => total + count, 0);
}
// Test cases for hasBaby function
console.log('=== hasBaby Tests ===');
console.log(hasBaby(baby_bieber_lyrics_1.default)); // Expected: true (contains "baby" multiple times)
console.log(hasBaby(baby_bieber_lyrics_1.default.slice(0, 4))); // Expected: false (first 4 lines don't contain "baby")
// Additional test cases for hasBaby
const testCases = [
    'I love my baby!', // Should be true - whole word with punctuation
    'Baby is sleeping', // Should be true - whole word at start
    'The babysitter came', // Should be false - "baby" is part of "babysitter"
    'Babylon was great', // Should be false - "baby" is part of "Babylon"
    'BABY loves music', // Should be true - case insensitive
];
console.log('hasBaby additional tests:');
console.log(hasBaby(testCases.slice(0, 1))); // true
console.log(hasBaby(testCases.slice(1, 2))); // true
console.log(hasBaby(testCases.slice(2, 3))); // false
console.log(hasBaby(testCases.slice(3, 4))); // false
console.log(hasBaby(testCases.slice(4, 5))); // true
// Test cases for numBaby function
console.log('\n=== numBaby Tests ===');
console.log(numBaby(baby_bieber_lyrics_1.default)); // Expected: 56 (total occurrences in full lyrics)
console.log(numBaby(baby_bieber_lyrics_1.default.slice(10, 15))); // Count in lines 10-14
// Additional test cases for numBaby
const countTestCases = [
    'Baby baby baby oh', // Should count 3
    'The babysitter has a baby', // Should count 1 (not "babysitter")
    'Baby! Baby? Baby.', // Should count 3
    'No matches here', // Should count 0
    'Babylon baby Baby', // Should count 2 (not "Babylon")
];
console.log('numBaby additional tests:');
console.log(numBaby(countTestCases.slice(0, 1))); // 3
console.log(numBaby(countTestCases.slice(1, 2))); // 1
console.log(numBaby(countTestCases.slice(2, 3))); // 3
console.log(numBaby(countTestCases.slice(3, 4))); // 0
console.log(numBaby(countTestCases.slice(4, 5))); // 2
// Test with empty array
console.log(numBaby([])); // 0
