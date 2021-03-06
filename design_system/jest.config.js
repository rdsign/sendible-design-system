module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.ts',
        '!src/theme/**/*',
        '!src/components/system/**/*',
        '!src/**/*.d.ts',
        '!src/**/*.exports.ts',
        '!src/**/*.styles.ts',
        '!src/**/*.stories.tsx',
    ],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            statements: 70,
            lines: 70,
        },
    },
    moduleNameMapper: {
        '^.+\\.(css|sass|scss)$': '<rootDir>/spec/__mocks__/styleMock.js',
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/spec/__mocks__/fileMock.js',
    },
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>spec/jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
};
