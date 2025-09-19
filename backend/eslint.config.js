import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import perfectionist from 'eslint-plugin-perfectionist';
import vitest from '@vitest/eslint-plugin';

export default defineConfig(
  {
    ignores: ['**/*.js'],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          fallbackSort: { type: 'unsorted' },
          ignoreCase: true,
          specialCharacters: 'keep',
          internalPattern: ['^#.+'],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 1,
          maxLineLength: undefined,
          groups: [
            'type-import',
            ['value-builtin', 'value-external'],
            'type-internal',
            'value-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'ts-equals-import',
            'unknown',
          ],
          customGroups: [],
          environment: 'node',
        },
      ],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      '@typescript-eslint/unbound-method': 'off',
    },
  },
);
