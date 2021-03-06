// 题目
// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

// #思路
// 考虑完全所有情况

// 1.只能出现数字、符号位、小数点、指数位
// 2.小数点，指数符号只能出现一次、且不能出现在开头结尾
// 3.指数位出现后，小数点不允许在出现
// 4.符号位只能出现在开头和指数位后面
function isNumber (s) {
  if(s === undefined) {
      return false
  }
  let haspoint = false
  let hasExp = false
  for(let i = 0; i < s.length - 1; i++) {
      const target = s[i]
      if (target >= 0 && target <= 9) {
          continue;
      } else if(target === 'e' || target ==='E') {
          if(hasExp||i === 0 || i === s.length -1) {
              return false
          } else {
              hasExp = false
              continue
          }
      } else if (target === '.') {
          if(haspoint|| hasExp|| i === s.length -1 || i === 0) {
              return false
          } else {
              haspoint = true
              continue
          }
      } else if (target === '-' || target === '+') {
          if(i === 0 || s[i-1] === 'e'||s[i-1] === 'E') {
              continue
          } else {
              return false
          }
      } else {
          return false
      }
  }
  return true
}