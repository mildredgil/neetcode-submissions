class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // withHash
        const hash = {}

        for(const num of nums) {
            if( hash[num] !== undefined) return true
            hash[num] = true
        }

        return false
    }
}
