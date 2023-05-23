module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: true,
  coverageDirectory: 'coverage/youlist',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
};
