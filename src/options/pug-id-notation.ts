import { ChoiceSupportOption } from 'prettier';
import { CATEGORY_PUG } from '.';

export const PUG_ID_NOTATION: ChoiceSupportOption = {
	since: '1.13.0',
	category: CATEGORY_PUG,
	type: 'choice',
	default: 'literal',
	description: 'Define how the Id should be formatted',
	choices: [
		{ value: 'as-is', description: 'Disables id formatting.' },
		{ value: 'literal', description: 'Forces all valid ids to be printed as literals.' }
	]
};

export type PugIdNotation = 'literal' | 'as-is';
