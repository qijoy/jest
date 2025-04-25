// 从工具模块中导入函数（虽然我们后面会 mock）
const { sum, sub, mul, div } = require("../utils/tools");

// 使用 Jest 的自动 mock 功能来 mock ../utils/tools 模块
jest.mock("../utils/tools", () => {
  // 获取原始模块，也就是 ../utils/tools 中真正定义的函数
  const originalModule = jest.requireActual("../utils/tools");

  // 返回一个新的对象作为 mock 结果
  // - 使用原始模块中的 mul、div
  // - 使用 mock 实现覆盖 sum、sub
  return {
    ...originalModule,              // 保留原始的函数实现（比如 mul、div）
    sum: jest.fn(() => 100),        // mock sum，总是返回 100
    sub: jest.fn(() => 50),         // mock sub，总是返回 50
  };
});

test("测试 tools 模块中的函数", () => {
  // 被 mock 的方法返回的是我们在 jest.fn 里定义的固定值
  expect(sum(1, 2)).toBe(100);      // 实际参数不会影响结果
  expect(sub(10, 3)).toBe(50);      // 同上

  // 没有被 mock 的方法，执行的是原始函数逻辑
  expect(mul(10, 3)).toBe(30);
  expect(div(10, 2)).toBe(5);
});

test("测试 mock 函数的调用记录", () => {
  sum(2, 2);
  sub(9, 4);

  // 可以断言 mock 函数是否被调用过，以及调用时的参数
  expect(sum).toHaveBeenCalled();               // ✅ 被调用过
  expect(sum).toHaveBeenCalledWith(2, 2);       // ✅ 调用时传入的参数正确

  expect(sub).toHaveBeenCalledTimes(2);         // 因为上一个 test 和这个 test 累加
  expect(sub).toHaveBeenLastCalledWith(9, 4);   // 最后一次调用参数是 (9, 4)
});