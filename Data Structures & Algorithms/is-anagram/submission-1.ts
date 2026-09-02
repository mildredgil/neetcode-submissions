class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        
        const map = {}

        for(let l of s){
            if(map[l] !== undefined) {
                map[l] += 1
            } else {
                map[l] = 1
            }
        }

        for(let l of t){
            if(map[l] !== undefined) {
                map[l] -= 1
                if(map[l] === 0) delete map[l]
            } else {
                return false
            }
        }

        return Object.keys(map).length === 0
    }
}
