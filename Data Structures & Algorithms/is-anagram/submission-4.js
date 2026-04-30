class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if (s.length !== t.length) return false;
       const map = new Map();
       for(let i = 0; i < s.length; i++){
            // map has this char? increment the count or else init to 0 
            map.set(s[i], (map.get(s[i]) || 0) +1 );
       }
       for(let i = 0; i < t.length; i++){
            // map has this char? decrement the count or else init to 0 
            map.set(t[i], (map.get(t[i]) || 0) -1 );
       }

       for(const val of map.values()){
        if(val !== 0 ) return false;
        
       }
       return true;
       
    }
}