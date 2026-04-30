class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // remember dont let an index evaluate as equal to itself
        // convert array to table but with index stored as value 
        // get diff, check if diff exists in map, returncurr start index and diff index 

        const map = new Map(nums.map((num, idx) => [num, idx]));
        for(let i = 0; i < nums.length; i++){
            let curr = nums[i];
            let diff = target - curr;
            if(map.has(diff) && i !== map.get(diff)) return [i, map.get(diff)];
        }
        return false;
    }
}
