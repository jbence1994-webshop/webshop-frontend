import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1) React & frameworks
            ['^react', '^next'],

            // 2) Packages (node_modules)
            ['^@?\\w'],

            // 3) Absolute aliases except 'assets'
            ['^(?:@|src)/(?!assets/)'],

            // 4) Side-effect imports (e.g. polyfills, CSS resets)
            ['^\\u0000'],

            // 5) Relative imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

            // 6) Styles
            ['^.+\\.s?css$'],

            // 7) Images inside 'assets'
            ['^(?:@|src)/assets/.*\\.(?:avif|bmp|gif|jpe?g|png|svg|webp)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
