module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
    ],
}