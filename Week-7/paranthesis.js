

var isValidParanthesis = function (s) {
    let stack = []
    if (s.length % 2 === 1) { return false }

    for (let i = 0; i < s.length; i++) {
        left = ['{', '[', '(']
        right = ['}', ']', ')']

        if (left.includes(s[i])) {
            stack.push(s[i])
        }
        else {
            if (right.indexOf(s[i]) === left.indexOf(stack[stack.length - 1])) {
                stack.pop()
            } else { return false }
        }
    }
    return stack.length === 0
};

str1 = '[(])'// false
console.log('[(]) is '+isValidParanthesis(str1))
str2 = '[()]{}{()()}'// true
console.log('[()]{}{()()} is '+isValidParanthesis(str2))

//  https://leetcode.com/submissions/detail/763565672/