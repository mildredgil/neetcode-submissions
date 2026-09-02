class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hash = {}

        for(let i in nums) {
            if(hash[target - nums[i]]) {
                return [Number(hash[target - nums[i]]), Number(i)]
            } else {
                hash[nums[i]] = i
            }
        }
    }
}
