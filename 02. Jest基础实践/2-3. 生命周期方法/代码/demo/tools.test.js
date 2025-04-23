const { sum, sub, mul, div } = require("./tools");

// 全局的生命周期方法
beforeAll(() => {
  console.log("\x1b[34m%s\x1b[0m", "🌍 全局 beforeAll：初始化测试环境");
});

afterAll(() => {
  console.log("\x1b[34m%s\x1b[0m", "🌍 全局 afterAll：清理测试环境");
});

beforeEach(() => {
  console.log("\x1b[36m%s\x1b[0m", "🔁 全局 beforeEach：准备一个测试");
});

afterEach(() => {
  console.log("\x1b[36m%s\x1b[0m", "🔁 全局 afterEach：测试已完成");
});

describe("第一组", () => {
  beforeAll(() => {
    console.log("\x1b[32m%s\x1b[0m", "✅ 第一组 beforeAll");
  });

  afterAll(() => {
    console.log("\x1b[32m%s\x1b[0m", "✅ 第一组 afterAll");
  });

  beforeEach(() => {
    console.log("\x1b[33m%s\x1b[0m", "🔁 第一组 beforeEach");
  });

  afterEach(() => {
    console.log("\x1b[33m%s\x1b[0m", "🔁 第一组 afterEach");
  });

  test("测试加法函数", () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
    console.log("🧪 执行测试：加法");
  });

  test("测试减法函数", () => {
    const result = sub(15, 10);
    expect(result).toBe(5);
    console.log("🧪 执行测试：减法");
  });
});

describe("第二组", () => {
  beforeAll(() => {
    console.log("\x1b[32m%s\x1b[0m", "✅ 第二组 beforeAll");
  });

  afterAll(() => {
    console.log("\x1b[32m%s\x1b[0m", "✅ 第二组 afterAll");
  });

  beforeEach(() => {
    console.log("\x1b[33m%s\x1b[0m", "🔁 第二组 beforeEach");
  });

  afterEach(() => {
    console.log("\x1b[33m%s\x1b[0m", "🔁 第二组 afterEach");
  });

  test("测试乘法函数", () => {
    const result = mul(2, 3);
    expect(result).toBe(6);
    console.log("🧪 执行测试：乘法");
  });

  test("测试除法函数", () => {
    const result = div(50, 2);
    expect(result).toBe(25);
    console.log("🧪 执行测试：除法");
  });
});