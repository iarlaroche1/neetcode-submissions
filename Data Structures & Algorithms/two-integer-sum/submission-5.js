class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

// create a map to store numbers we've seen and their indices
// loop through the array
    // calculate the complement: target - current number
    // if the map contains the complement, return [complement's index, current index]
    // otherwise add the current number and its index to the map
// the early return means best case we never traverse the full array

        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(map.has(diff)) return [map.get(diff), i];
            map.set(nums[i], i);
        }
        return false;
    }
}
