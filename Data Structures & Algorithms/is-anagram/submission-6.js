class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        // create an array of 26 0s, each representing a count for each letter in the alphabet 
        const freq = new Array(26).fill(0);
        // define a as being 0 
        const a = 'a'.charCodeAt(0);

        for(let i = 0; i < s.length; i++){
            freq[s[i].charCodeAt(0) - a]++;
            freq[t[i].charCodeAt(0) - a]--;
        }
        return freq.every(el => el === 0);
    }
}