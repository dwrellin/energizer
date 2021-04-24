module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['assets', './assets'],
          ['components', './components'],
          ['utilities', './utilities'],
        ],
        extensions: [
          '.js', '.jsx', '.scss', '.sass',
        ],
      },
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'consistent-return': 0,
    'no-alert': 0,
    'react/destructuring-assignment': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-use-before-define': 0,
    'no-nested-ternary': 0,
    'no-shadow': 0,
  },
};
