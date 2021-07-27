import { readFileSync } from 'fs';
import { resolve } from 'path';
import { format } from 'prettier';
import { plugin } from './../../../src/index';

describe('Issues', () => {
	test('should consistently format quotes', () => {
		const expected: string = readFileSync(resolve(__dirname, 'formatted.pug'), 'utf8');
		const code: string = readFileSync(resolve(__dirname, 'unformatted.pug'), 'utf8');
		const actual: string = format(code, {
			parser: 'pug',
			plugins: [plugin],
			semi: false,
			singleQuote: true,
			trailingComma: 'none',
			arrowParens: 'avoid',

			// @ts-expect-error
			pugAttributeSeparator: 'as-needed'
		});

		expect(actual).toBe(expected);
	});
});