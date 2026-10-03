import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

// Note: eslint-config-next's eslint-plugin-react dependency isn't yet compatible
// with ESLint 10's flat config API (see eslint-plugin-react/lib/util/version.js).
// `next build`'s own TypeScript/route checking covers Next-specific correctness in
// the meantime; revisit adding eslint-config-next back once that's fixed upstream.
export default tseslint.config(
  { ignores: ['.next', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
)
