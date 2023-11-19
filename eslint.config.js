const chuhoman = require('@chuhoman/eslint-config').default;

module.exports = chuhoman({
  vue: true,
  ignores: [
    '**/node_modules/**',
    '**/.vitepress/cache/**',
    '*.svg',
    'package.json',
    'dev-dist',
    'dist',
    '**/public/**',
    'pnpm-lock.yaml',
  ],
});
