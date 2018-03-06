// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: ['plugin:vue/recommended'],
	// required to lint *.vue files
	plugins: ['vue', 'prettier'],
	// add your custom rules here
	rules: {
		'space-before-function-paren': ['error', 'never'],
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': 'error'
	}
};
