// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		sourceType: 'module',
		parser: 'babel-eslint'
	},
	env: {
		browser: true
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: ['prettier', 'plugin:vue/essential'],
	// required to lint *.vue files
	plugins: ['vue', 'prettier'],
	// add your custom rules here
	rules: {
		'space-before-function-paren': ['error', 'never'],
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false
			}
		]
	}
}
