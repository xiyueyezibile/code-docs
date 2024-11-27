const fs = require("fs");
const babel = require("@babel/core");

/* 第一步：模拟读取文件内容。 */
fs.readFile("./jsx.js", (e, data) => {
  const code = data.toString("utf-8");

  /* 第二步：转换 jsx 文件 */
  const result = babel.transformSync(code, {
    plugins: ["@babel/plugin-transform-react-jsx"],
  });
  console.log(result);

  /* 第三步：模拟重新写入内容。 */
  fs.writeFileSync("./result.js", result.code);
});
