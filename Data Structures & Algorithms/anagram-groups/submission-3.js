class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let a = 'a'.charCodeAt(0);
      let map = new Map();

      for(let i = 0; i < strs.length; i ++){
            let word = strs[i];
            let freqArray = new Array(26).fill(0);

            for(let n = 0; n < word.length; n ++){
                let index = word[n].charCodeAt(0) - a;
                freqArray[index] ++;
            }

            let freqArrayString = freqArray.join();
            if(!map.has(freqArrayString)){
                map.set(freqArrayString, [word]);
            }
            else{
                map.get(freqArrayString).push(word);
            }
      }
        return Array.from(map.values());
    }

}
