/**
 * 工具库模块
 * 提供常用的数学运算函数：加、减、乘、除
 */

// 加法函数：返回 a + b 的结果
exports.sum = function (a, b) {
  return a + b;
};

// 减法函数：返回 a - b 的结果
exports.sub = function (a, b) {
  return a - b;
};

// 乘法函数：返回 a * b 的结果
exports.mul = function (a, b) {
  return a * b;
};

// 除法函数：返回 a / b 的结果（注意除数为 0 时需额外处理）
exports.div = function (a, b) {
  if (b === 0) {
    throw new Error("除数不能为 0");
  }
  return a / b;
};