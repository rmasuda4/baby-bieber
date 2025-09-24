"use strict";
/**
 * Problem: Searching for the whole word "baby" in a string is tricky because
 * we must match only complete words, ignoring case and ignoring substrings
 * like "babysit" or "Babylon". We also need to handle punctuation, e.g., "baby!",
 * "baby," or "baby_beiber" should count as occurrences.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baby_bieber_lyrics_1 = __importDefault(require("./baby-bieber-lyrics"));
// Utility function to check if a string contains the whole word "baby" (case-insensitive)
const containsWholeWord = (line, word) => {
    // Use regular expression to match whole word with optional punctuation
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    return regex.test(line);
};
/**
 * Checks if any line in the array contains the word "baby".
 * @param lines Array of strings to check
 * @returns true if at least one line contains "baby" as a whole word
 */
const hasBaby = (lines) => lines.some(line => containsWholeWord(line, 'baby'));
/**
 * Counts how many lines contain the word "baby".
 * @param lines Array of strings to check
 * @returns Number of lines containing "baby" as a whole word
 */
const numBabies = (lines) => lines.filter(line => containsWholeWord(line, 'baby')).length;
// -----------------
// Test cases
// -----------------
console.log(hasBaby(baby_bieber_lyrics_1.default)); // true
console.log(hasBaby(baby_bieber_lyrics_1.default.slice(0, 4))); // false, first 4 lines have no "baby"
console.log(numBabies(baby_bieber_lyrics_1.default)); // count of lines with "baby"
console.log(numBabies(baby_bieber_lyrics_1.default.slice(10, 15))); // check a subset
// Edge case tests
console.log(hasBaby(['Babylon is a city'])); // false, "baby" is a substring
console.log(hasBaby(['I love my Baby!'])); // true, punctuation allowed
console.log(numBabies(['Baby, baby, baby', 'babysit', 'my Baby'])); // 2 lines counted
