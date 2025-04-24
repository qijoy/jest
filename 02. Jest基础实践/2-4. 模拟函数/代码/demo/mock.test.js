// ✅ 打印 Jest 提供的所有 mock 工具函数（可选，仅用于了解 jest 对象）
console.log(jest);

//
// ✅ mockReturnValue / mockReturnValueOnce 用法演示
//
test("mock 函数的返回值设置演示", () => {
  // 创建一个空的 mock 函数
  const mock = jest.fn();

  // 设置返回值：默认是 30，但前两次调用分别返回 10 和 20
  mock
    .mockReturnValue(30) // 第三次及以后返回 30
    .mockReturnValueOnce(10) // 第一次调用返回 10
    .mockReturnValueOnce(20); // 第二次调用返回 20

  // 第一次调用返回 10（来自 mockReturnValueOnce）
  expect(mock()).toBe(10);

  // 第二次调用返回 20
  expect(mock()).toBe(20);

  // 第三、四次调用返回默认值 30
  expect(mock()).toBe(30);
  expect(mock()).toBe(30);

  // 更改默认返回值为 42
  mock.mockReturnValue(42);
  expect(mock()).toBe(42);
});

//
// ✅ 使用 mock 函数模拟一个有内置实现的函数
//
test("mock 函数自定义实现", () => {
  // mock 函数接收一个参数 x，返回 100 + x
  const mock = jest.fn(x => 100 + x);

  // 验证 mock 函数是否正确计算
  expect(mock(1)).toBe(101);
  expect(mock(5)).toBe(105);
});

//
// ✅ 测试函数 forEach 是否按预期调用回调函数
//

// 定义一个 forEach 函数，它接收数组和回调函数
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

test("forEach 使用 mock 回调函数测试", () => {
  const arr = [1, 2, 3];

  // 创建一个带有返回值逻辑的 mock 回调函数
  const mockCallback = jest.fn(x => 100 + x);

  // 执行 forEach，mockCallback 会被调用 3 次
  forEach(arr, mockCallback);

  // ✅ 检查调用次数
  expect(mockCallback).toHaveBeenCalledTimes(3);

  // ✅ 检查每次调用时传入的参数
  expect(mockCallback.mock.calls[0][0]).toBe(1); // 第一次参数是 1
  expect(mockCallback.mock.calls[1][0]).toBe(2); // 第二次参数是 2
  expect(mockCallback.mock.calls[2][0]).toBe(3); // 第三次参数是 3

  // ✅ 检查每次返回值
  expect(mockCallback.mock.results[0].value).toBe(101);
  expect(mockCallback.mock.results[1].value).toBe(102);
  expect(mockCallback.mock.results[2].value).toBe(103);

  // ✅ 检查是否曾被调用
  expect(mockCallback).toHaveBeenCalled();

  // ✅ 检查是否用指定参数调用过
  expect(mockCallback).toHaveBeenCalledWith(1);
  expect(mockCallback).toHaveBeenCalledWith(2);

  // ✅ 检查最后一次调用的参数是否为 3
  expect(mockCallback).toHaveBeenLastCalledWith(3);
});

//
// ✅ 模拟异步请求函数
//

// 假设真实项目中是一个异步请求函数
function fetchData() {
  return Promise.resolve({ id: 1, name: "xiejie" });
}

test("模拟异步请求成功", async () => {
  // 使用 jest.fn() 创建一个异步函数 mock，返回 Promise.resolve(...)
  const mockFetch = jest.fn(() =>
    Promise.resolve({ id: 1, name: "xiejie" })
  );

  // 调用并等待异步执行结果
  const data = await mockFetch();

  // ✅ 检查返回值
  expect(data).toEqual({ id: 1, name: "xiejie" });

  // ✅ 检查调用次数
  expect(mockFetch).toHaveBeenCalledTimes(1);
});

test("模拟异步请求失败后恢复正常", async () => {
  // 创建一个异步函数 mock，控制前两次行为
  const mockFetch = jest
    .fn()
    .mockImplementationOnce(() =>
      Promise.reject(new Error("network error")) // 第一次抛出异常
    )
    .mockImplementationOnce(() =>
      Promise.resolve({ id: 1, name: "xiejie" }) // 第二次返回成功
    );

  // ✅ 第一次调用应抛出错误
  await expect(mockFetch()).rejects.toThrow("network error");

  // ✅ 第二次调用应返回正常数据
  await expect(mockFetch()).resolves.toEqual({ id: 1, name: "xiejie" });

  // ✅ 总共调用了两次
  expect(mockFetch).toHaveBeenCalledTimes(2);
});