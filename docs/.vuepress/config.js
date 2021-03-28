const { defineUserConfig } = require('@vuepress/cli');

module.exports = defineUserConfig({
	lang: 'en-US',
	title: 'Documentation',
	description: '@prettier/plugin-pug documentation',

	// theme: 'yuu',
	themeConfig: {
		logo:
			'https://camo.githubusercontent.com/f89d53e813140369c509e67424833cdfc3f76dcf997d4b3b0a1174ec12304600/68747470733a2f2f63646e2e7261776769742e636f6d2f70726574746965722f70726574746965722d6c6f676f2f6d61737465722f696d616765732f70726574746965722d69636f6e2d6c696768742e737667'
	},

	bundler: '@vuepress/vite'
});
