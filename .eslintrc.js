parserOptions: {
    parser: '@babel/eslint-parser';
    requireConfigFile: false; // <== ADD THIS
    ecmaVersion: 2020; // Allows for the parsing of modern ECMAScript features
    sourceType: 'module'; // Allows for the use of imports
    "extends": ["@salesforce/eslint-config-lwc/recommended"]
    
}