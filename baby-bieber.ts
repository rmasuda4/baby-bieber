/*
  NOTE: Problem with searching for the word "yeah":
  When searching for whole words in text with punctuation, a naïve substring
  search would incorrectly match partial words like "yeahman" or miss words
  like "yeah!" or "yeah?". To solve this, we must:
  1. Split text into individual words (by spaces)
  2. Remove punctuation from each word before comparison
  3. Match only the exact word "yeah" (case-insensitive)

  This ensures we count "Yeah," "yeah!" and "yeah?" as matches, but exclude
  "yeahman", "Yeahyeah", and other words containing "yeah" as a substring.
*/

/**
 * Returns true if any of the strings in lyrics contains "yeah" as a whole word (case-insensitive).
 */
function hasYeah(lyrics: string[]): boolean {
  return numYeahs(lyrics) > 0;
}

/**
 * Returns the total count of occurrences of "yeah" as a whole word across all lines (case-insensitive).
 */
function numYeahs(lyrics: string[]): number {
  return lyrics
    .map((line) => {
      // Split by spaces and count 'yeah' occurrences
      const words = line.toLowerCase().split(' ');
      return words.filter((w) => {
        // Remove punctuation from the word to match 'yeah'
        const cleanWord = w.replace(/[^a-z]/g, '');
        return cleanWord === 'yeah';
      }).length;
    })
    .reduce((acc, n) => acc + n, 0);
}

// Some test invocations:
console.log('hasYeah(bieberBaby) =>', hasYeah(bieberBaby)); // should print true
console.log('hasYeah(bieberBaby.slice(0, 4)) =>', hasYeah(bieberBaby.slice(0, 4))); // might be false
console.log('numYeahs(bieberBaby) =>', numYeahs(bieberBaby)); // expected count based on lyrics
console.log('numYeahs(bieberBaby.slice(2,4)) =>', numYeahs(bieberBaby.slice(2, 4)));

// Additional tests to verify no false positives for substring cases
console.log('hasYeah(["Yeahman is cool"]) =>', hasYeah(['Yeahman is cool'])); // false
console.log('numYeahs(["Yeahman said yeah"] ) =>', numYeahs(['Yeahman said yeah'])); // 1
console.log('numYeahs(["Yeah, yeah! yeah?"]) =>', numYeahs(['Yeah, yeah! yeah?'])); // should be 3
