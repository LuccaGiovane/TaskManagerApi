module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'], // Pasta onde ficarão os testes
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'], // Arquivo de setup (opcional)
};