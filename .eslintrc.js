module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    "plugin:react/jsx-runtime",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['vendor/', 'build/', 'public/build', 'coverage/'],
  root: true,
  "rules": {
    "linebreak-style": 0,
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    "comma-dangle": ["error", "only-multiline"],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "warn",
      {
        "namedComponents": [
          "function-declaration",
          "function-expression",
          "arrow-function"
        ],
        "unnamedComponents": ["function-expression", "arrow-function"]
      }
    ],
    "object-curly-newline": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "required": {
          "some": ["nesting", "id"]
        }
      }
    ],
    "func-names": ["error", "as-needed"],
    "arrow-body-style": "off"
  }
};
