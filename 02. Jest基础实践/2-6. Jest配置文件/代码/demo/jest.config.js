/**
 * 关于每个配置项的详细解释，请访问：
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // 是否自动模拟所有导入的模块（mock）
  // automock: false,

  // 在出现 n 个失败后停止执行测试
  // bail: 0,

  // Jest 用于缓存依赖信息的目录
  // cacheDirectory: "/private/var/folders/qh/r7b6djfj3hz_3w23t6380hgc0000gn/T/jest_dx",

  // 是否在每个测试前自动清除 mock 调用、实例、上下文和结果
  clearMocks: true,

  // 是否在执行测试时收集覆盖率信息
  collectCoverage: true,

  // 一个 glob 模式数组，用于指定要收集覆盖率的文件
  // collectCoverageFrom: undefined,

  // Jest 输出覆盖率报告的目录
  coverageDirectory: "coverage",

  // 一个正则表达式数组，用于跳过某些路径的覆盖率收集
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // 用于插装代码以收集覆盖率的提供者（推荐使用 v8）
  coverageProvider: "v8",

  // Jest 用来写入覆盖率报告的报告格式列表
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // 配置覆盖率阈值（每个维度最小值），未达到会报错
  coverageThreshold: {
    global:{
      branches:90,
      functions:90,
      lines:90,
      statements:90
    }
  },

  // 自定义依赖提取器的路径
  // dependencyExtractor: undefined,

  // 是否在调用废弃 API 时抛出错误提示
  // errorOnDeprecated: false,

  // 假定计时器的默认配置
  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // 强制从被忽略的文件中收集覆盖率
  // forceCoverageMatch: [],

  // 在所有测试套件开始前，运行某个异步函数模块的路径
  // globalSetup: undefined,

  // 在所有测试套件完成后，运行某个异步函数模块的路径
  // globalTeardown: undefined,

  // 所有测试环境中可用的全局变量配置
  // globals: {},

  // 最大的测试运行并发数量（可以是百分比或具体数字）
  // maxWorkers: "50%",

  // 模块导入时递归搜索的目录名称数组
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // 模块使用的文件扩展名数组
  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // 模块名的正则映射，用于替代资源
  // moduleNameMapper: {},

  // 匹配路径后忽略的模块路径数组
  // modulePathIgnorePatterns: [],

  // 启用测试结果的系统通知
  // notify: false,

  // 通知触发的模式（前提是 notify: true）
  // notifyMode: "failure-change",

  // 用作 Jest 配置基础的预设
  // preset: undefined,

  // 指定多个项目进行测试
  // projects: undefined,

  // 添加自定义 reporters
  // reporters: undefined,

  // 在每个测试前自动重置 mock 状态
  // resetMocks: false,

  // 在每个测试前重置模块注册表
  // resetModules: false,

  // 自定义模块解析器路径
  // resolver: undefined,

  // 在每个测试前自动恢复 mock 状态
  // restoreMocks: false,

  // Jest 应该在哪个目录下查找测试文件和模块
  // rootDir: undefined,

  // Jest 用于搜索文件的目录路径数组
  // roots: [
  //   "<rootDir>"
  // ],

  // 使用自定义的测试运行器代替默认的
  // runner: "jest-runner",

  // 测试前设置环境的模块路径数组
  // setupFiles: [],

  // 测试框架准备完成后设置环境的模块路径数组
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']

  // 测试超过这个时间会被认为是「慢测试」，结果中会标记
  // slowTestThreshold: 5,

  // Jest 用于快照测试的序列化器路径列表
  // snapshotSerializers: [],

  // 用于测试的环境类型（比如 node 或 jsdom）
  // testEnvironment: "jest-environment-node",

  // 传递给 testEnvironment 的配置项
  // testEnvironmentOptions: {},

  // 是否在测试结果中包含每个测试的位置
  // testLocationInResults: false,

  // Jest 检测测试文件的 glob 模式
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // 正则模式数组，匹配后将跳过测试的路径
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // 自定义检测测试文件的正则表达式数组
  // testRegex: [],

  // 使用自定义的结果处理器
  // testResultsProcessor: undefined,

  // 使用自定义测试运行器
  // testRunner: "jest-circus/runner",

  // 转换模块路径到转换器的映射表
  // transform: undefined,

  // 匹配路径的正则，跳过这些路径的转换处理
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // 正则模式数组，匹配后将不会 mock 的模块路径
  // unmockedModulePathPatterns: undefined,

  // 是否在运行时报告每一个测试（即 verbose 模式）
  // verbose: undefined,

  // 重新运行测试时忽略的路径模式数组
  // watchPathIgnorePatterns: [],

  // 是否使用 watchman 来监听文件变化（macOS 推荐开启）
  // watchman: true,
};

module.exports = config;