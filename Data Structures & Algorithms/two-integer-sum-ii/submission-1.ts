class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const output = []
        let i = 0
        let j = numbers.length - 1

        while(output.length === 0) {
            const s = numbers[i] 
            const b = numbers[j]
            if(s + b === target) {
                output.push(i + 1)
                output.push(j + 1)
            } else if (s + b < target) {
                i += 1
            } else {
                j -= 1
            }
        }

        return output
    }
}
