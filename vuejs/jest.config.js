module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/tests/$1',
  },
  testRegex: '/src/.*\\.spec\\.js$',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ["/node_modules/(?!(vuetify)/)"],
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  setupFiles: ['<rootDir>/tests/unit/setup', 'dotenv/config'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router.js',
    '!src/**/store/**/index.js',
    '!**/node_modules/**',
  ],
  globals: {
    requestAnimationFrame: (cb) => { cb(); },
  },
};
