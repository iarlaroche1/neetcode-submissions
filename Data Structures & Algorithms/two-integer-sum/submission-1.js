class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map(nums.map((num, idx) => [num, idx]));

        for(let i = 0; i < nums.length; i++){
            let num = nums[i];

            let diff = target - num;
            if(map.has(diff) && map.get(diff) !== i) return [i, map.get(diff)];

        }
    }
}
