class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanS = s.replace(/[^a-zA-Z0-9]/g, "");
        const lowerS = cleanS.toLowerCase()

        for(let i = 0, j = lowerS.length - 1; i <= j; i++, j--) {
            if(lowerS[i] !== lowerS[j]) return false
        }

        return true
    }
}
