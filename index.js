const stylelint = require( 'stylelint' );

const ruleName = '@webdevstudios/stylelint-no-debug/no-debug';

const messages = stylelint.utils.ruleMessages( ruleName, {
	rejected: 'Remove @debug statement in this block',
} );

module.exports = stylelint.createPlugin( ruleName, ( enabled ) =>
	( root, result ) => {
		const validOptions = stylelint.utils.validateOptions( result, ruleName, {
			actual: enabled,
			possible: [
				true,
				false,
			],
		} );

		const checkForDebugStatement = ( rule ) => {
			rule.nodes.forEach( ( node ) => {
				if ( 'atrule' !== node.type ) {
					return;
				}

				if ( 'debug' !== node.name ) {
					return;
				}

				stylelint.utils.report( {
					ruleName,
					result,
					node,
					message: messages.rejected,
				} );
			} );
		};

		if ( ! validOptions ) {
			return;
		}

		root.walkRules( checkForDebugStatement );
	}
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
