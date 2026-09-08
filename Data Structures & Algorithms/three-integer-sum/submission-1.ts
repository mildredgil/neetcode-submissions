class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const output = []
        const ns = nums.sort((a,b) => a - b)
        
        
        for(let ti = 0; ti < ns.length; ti++) {
            if(ti > 0 && ns[ti - 1] === ns[ti]) continue;
            const t = - ns[ti]
            let i = ti + 1
            let j = ns.length - 1

            while(i < j) {
                const s = ns[i]
                const b = ns[j]

                if(s + b === t) {
                    output.push([s,b,-t])
                    while(i < j && ns[i] === s) i += 1
                    while(i < j && ns[j] === b) j -= 1
                } else if( s + b < t) {
                    i += 1
                } else {
                    j -= 1
                }
            }
        }

        return output
    }
}
