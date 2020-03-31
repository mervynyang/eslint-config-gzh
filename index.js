module.exports = {
  rules: {
    // 按照环境区分是否启用console和debugger
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // 有时候生成环境也需要alert，禁用该规则
    "no-alert": 0,

    // 只强制对象解构，不强制数组解构
    "prefer-destructuring": ["error", {"object": true, "array": false}],

    // 强制不适用分号
    "semi": [1, "never"],

    // 一行最长为140个字符，忽略url和注释
    "max-len": ["error", { "ignoreUrls": true, "code": 140,"ignoreComments": true}],

    // 禁止++操作符，除非在for循环中
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],

    // 禁止使用特定的语法
    "no-restricted-syntax": ["error", "ForInStatement", "WithStatement"],

    // 操作符换行格式
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],

    // 禁用：强制在花括号内使用一致的换行
    "object-curly-newline": 0,

    // 函数声明作用域会被提升，所以这样做是安全的
    "no-use-before-define": ["error", { "functions": false }],

    // 允许空的catch函数
    "no-empty": ["error", { "allowEmptyCatch": true }],
  },
}
