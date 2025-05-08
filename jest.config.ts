/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // Sử dụng preset của ts-jest
  testEnvironment: 'jest-environment-jsdom', // Chạy trong môi trường jsdom (cho testing React)
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: "tsconfig.app.json" // <- Thêm dòng này
    }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Cấu hình các file extension mà Jest sẽ nhận dạng
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'], // Đảm bảo setupTest.ts được chạy sau khi Jest đã cấu hình
};
