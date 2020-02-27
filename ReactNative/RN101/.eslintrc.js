/*
 也许后面还加一个  .eslintignore 文件
 内容是:
```
__tests__/*.*
babel.config.js
/scripts/
```

 */
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 取消那种换行, {后面不能带空格之类的恶心的格式 (也与我的.prettierrc文件冲突了)
    "prettier/prettier": "off",
    // eslint强制要使用单引号, 这可能会出错. 应该禁用
    "quotes": "off",
    // 变量声明了没有使用, 这在WebStorm中会灰色显示的, 没必要一个error出来
    "@typescript-eslint/no-unused-vars":"off",
    // 这个开启就是要 {x,y,}, 即要最后一个也带逗号. 这跟我的.prettierrc也冲突了
    "comma-dangle":"off"
  }
};
