class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if(prices.length < 2) return 0

        let max = Number.MIN_SAFE_INTEGER
        let s = 0
        let b = 0
        let i = 1
        while(i < prices.length ) {
            if(prices[b] > prices[i])
                b = i
            else 
                s = i
            if(s > b)
                max = Math.max(max, prices[s] - prices[b])
            i++
        }

        return max > 0 ? max : 0
    }
}
