/**
 * Stylelint Configuration
 *
 * Used for testing examples/example.scss
 *
 * Run `npm i` then either open this in your stylelint enabled code editor
 * or run `npm run test`.
 *
 * @since  1.0.3
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 */

module.exports = {
	plugins: [
		'./index.js' // Loads the current plugin (self).
	],
	rules: {
		'@webdevstudios/stylelint-no-debug/no-debug': true, // Sets to true causing errors when running `./node_modules/.bin/stylelint examples/example.scss`.
	}
}
