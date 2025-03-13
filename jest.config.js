const nextJest = require('next/jest.js')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './'
})

/**@type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        // ...
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    coverageDirectory: './coverage',
    coverageReporters: ['clover', 'json', 'lcov', 'text', 'text-summary']
}

module.exports = async () => ({
    ...(await createJestConfig(customJestConfig)()),
    transformIgnorePatterns: [
        'node_modules/(?!' +
        [
            'crypto-random-string',
            'react-markdown',
            'devlop',
            'hast-util-to-jsx-runtime',
            'comma-separated-tokens',
            'estree-util-is-identifier-name',
            'hast-util-whitespace'
        ].join('|') +
        ')'
    ]
})
