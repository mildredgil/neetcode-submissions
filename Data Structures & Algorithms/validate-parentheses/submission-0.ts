class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []

        for(let char of s) {
            if(char === '{') 
                stack.push('}')
            else if( char === '(')
                stack.push(')')
            else if( char === '[') 
                stack.push(']')
            else if (char === '}') 
                if(stack[stack.length - 1] !== char) 
                    return false
                else stack.pop()
            else if (char === ')') 
                if(stack[stack.length - 1] !== char) 
                    return false
                else stack.pop()
            else if (char === ']') 
                if(stack[stack.length - 1] !== char) 
                    return false
                else stack.pop()
        }

        return stack.length === 0
    }
}
