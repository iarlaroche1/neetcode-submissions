class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let a = 'a'.charCodeAt(0);
        const map = new Map();

        for(let i = 0; i < strs.length; i++){
            let word = strs[i];
            let freqArray = new Array(26).fill(0);
            
            for(let j = 0; j < word.length; j++){
                let charCode = word[j].charCodeAt(0) - a;
                freqArray[charCode]++;
            }
            let freqArrayString = freqArray.join();
            if(!map.has(freqArrayString)){
                map.set(freqArrayString, [word]);
            }
            else {
                map.get(freqArrayString).push(word);
            }

        }
        return Array.from(map.values());
    }
}
