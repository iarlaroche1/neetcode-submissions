class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map1 = new Map();
        const map2 = new Map();
        if(s.length != t.length) return false;

        for(let i = 0; i< s.length; i++){
            if(map1.has(s[i])){
                map1.set(s[i], map1.get(s[i]) +1);
            } 
            else map1.set(s[i], 1);

            if(map2.has(t[i])) {
                map2.set(t[i], map2.get(t[i]) +1)
            }
            else map2.set(t[i], 1);
        }

          for(let i = 0; i< s.length; i++){
            let el1 = map1.get(s[i]);
            let el2 = map2.get(s[i]);

            console.log(el1, el2);
            if(el1 != el2) return false;

          }
          return true;
    }
}
