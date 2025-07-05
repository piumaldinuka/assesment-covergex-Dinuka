const { defaults } = require('jest-config');

const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'jsx'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

module.exports = config;
