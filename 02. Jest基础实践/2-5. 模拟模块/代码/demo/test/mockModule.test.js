// 引入被测试模块（这个模块内部依赖了 axios）
const User = require("../api/userApi");

// 引入用于模拟的用户数据（静态 JSON 数据）
const userData = require("./user.json");

// 使用 jest.mock 对 axios 模块进行模拟
jest.mock("axios", () => {
  // 引入 user.json 作为模拟数据（可用于 axios.get 的返回值）
  const userData = require("./user.json");

  // 构造模拟响应对象（结构模仿 axios 实际返回值）
  const resp = {
    data: userData,
  };

  // 返回一个模拟版本的 axios 对象
  return {
    // 模拟 axios.get 方法，总是返回一个 Promise，resolve 到 resp
    get: jest.fn(() => Promise.resolve(resp)),

    // 模拟我们在 User.testArg() 中使用的 axios.test 方法
    // 注意：axios 原始库没有 test 方法，这里是为了演示 mock 自定义行为
    test: jest.fn(() => Promise.resolve("this is a test")),
  };
});

// 编写测试用例
test("测试 User 类中的方法", async () => {
  /**
   * 测试 User.all() 方法
   * 因为我们 mock 了 axios.get 返回的是 userData（通过 resp.data），
   * 所以这里断言返回结果应该等于 userData
   */
  await expect(User.all()).resolves.toEqual(userData);

  /**
   * 测试 User.testArg() 方法
   * 我们 mock 的 axios.test 会返回字符串 "this is a test"
   * 所以断言应该等于这个字符串
   */
  await expect(User.testArg()).resolves.toEqual("this is a test");
});