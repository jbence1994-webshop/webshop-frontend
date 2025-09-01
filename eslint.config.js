import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. React-related packages
            ["^react", "^react-dom", "^@types/react", "^@types/react-dom"],

            // 2. External packages (npm modules)
            ["^@?\\w"],

            // 3. Internal aliases (custom order)
            ["^@components"],

            // 4. CSS/SCSS imports
            ["^.+\\.css$", "^.+\\.scss$"],

            // 5. Static assets (images)
            ["^.+\\.(png|jpg|jpeg|gif|svg)$"],

            // 6. Relative imports (keep last)
            ["^\\."],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
