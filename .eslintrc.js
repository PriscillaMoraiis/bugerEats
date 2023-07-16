module.exports = {
  root: true,
  env: {
    'cypress/globals': true,
},
  
  extends: [
      'plugin:prettier/recommended',
      'plugin:eslint:recommended',
      'plugin:cypress/recommended',
  ],
  
  plugins: ['cypress', 'prettier'],
  
};

