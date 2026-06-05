class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arr = Array(26).fill(0);
        let a = 'a'.charCodeAt(0);
        if (s.length != t.length) return false;
        
       for(let i = 0; i < s.length; i++){
        arr[s.charCodeAt(i) - a]++;
        arr[t.charCodeAt(i) - a]--;
       }
       return arr.every(val => val === 0);

    }
}