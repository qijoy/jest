/**
 * 和请求相关的
 */

const axios = require("axios"); // 引入 axios 模块，用于发送 HTTP 请求

// 定义一个 User 类，封装用户相关的请求方法
class User {
  /**
   * 获取所有的用户数据
   * 调用 axios.get 方法，请求 "/users.json"
   * 返回的是一个 Promise，通过 then 拿到 resp（响应对象）中的 data 字段
   */
  static all() {
    return axios.get("/users.json").then((resp) => resp.data);
  }

  /**
   * 测试方法，用于演示如何模拟 axios 的自定义方法
   * 实际开发中 axios 并没有 test() 方法，
   * 但我们可以在测试中 mock（模拟）axios 模块，并人为添加 test 方法用于测试
   * 这个方法主要用于演示如何在测试环境中 mock 模块行为
   */
  static testArg() {
    return axios.test(); // 注意：axios 实际没有这个方法
  }
}

// 导出 User 类供外部使用
module.exports = User;