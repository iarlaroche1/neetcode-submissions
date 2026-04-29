class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        if(s.length != t.length) return false;
        for(let i = 0; i< s.length; i++){
            if(map.has(s[i])) map.set(s[i], map.get(s[i])+1) ;
            else map.set(s[i], 1) ;
            
        }
        for(let i = 0; i< s.length; i++){
            
            if(map.has(t[i])) map.set(t[i], map.get(t[i])-1) ;
            else map.set(t[i], 1) ;
        }
        for(const val of map.values()){
            console.log(val);
            if (val !=0) return false;
        }
        return true;
    }
}