class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const output = []
        const map = new Map()

        for(let word of strs) {
            const key = new Array(26).fill(0)
            // get my array
            for(let l = 0; l < word.length; l++) {
                const index = word.charCodeAt(l) - 97;
                key[index] += 1
            }
            
            const mapKey = key.join(",")
            
            if(map.has(mapKey)) {
                const anagrams = output[map.get(mapKey)]
                anagrams.push(word)
            } else {
                output.push([word])
                map.set(mapKey, output.length - 1)
            }
        }
        
        return output
    }
}
