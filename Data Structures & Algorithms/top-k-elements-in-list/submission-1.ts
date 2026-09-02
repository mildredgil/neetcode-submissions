class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = {}
        for(const num of nums) {
            if(map[String(num)]) map[String(num)] += 1
            else map[String(num)] = 1 
        }
        
        const bucketList = new Array(nums.length + 1).fill(null)
    
        for(const key of Object.keys(map)) {
            const val = map[key]
            
            if(bucketList[val] !== null)
                bucketList[val].push(Number(key))
            else bucketList[val] = [Number(key)]
            
        }
    
        const output = []
        let k2 = k
        
        for(let n = nums.length ; n >= 0 && k2 > 0; n--) {
            if(bucketList[n] !== null) {
                bucketList[n].map(key => output.push(key))
                k2 -= bucketList[n].length
            }
        }

        return output
    }
}
