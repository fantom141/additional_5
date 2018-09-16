module.exports = function check(str, bracketsConfig) {
    if (str.length <= 1) {
        return false
    }

    let matchingOpeningBracket, ch;
    let stack = [];

    let openingBrackets = ['[', '{', '(', '.|'];
    let closingBrackets = [']', '}', ')', '|.'];

    for (let i = 0; i < str.length; i++) {
        ch = str[i];

        if (ch === '|') {
            if (!stack.length || closingBrackets.includes(stack[stack.length - 1]) || stack[stack.length - 1] !== '.|') {
                ch = '.|';
            } else {
                ch = '|.';
            }
        }

        if (closingBrackets.includes(ch)) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
            if (!stack.length || (stack.pop() !== matchingOpeningBracket)) {
                return false
            }
        } else {
            stack.push(ch)
        }
    }

    return (stack.length === 0);
}
