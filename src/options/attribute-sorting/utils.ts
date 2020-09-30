import { AttributeToken } from 'pug-lexer';

type CompareResult = -1 | 0 | 1;

function compareByIndex(leftIndex: number, rightIndex: number): CompareResult {
	if (leftIndex !== -1 && rightIndex === -1) {
		return -1;
	}
	if (leftIndex === -1 && rightIndex !== -1) {
		return 1;
	}
	const result = leftIndex - rightIndex;
	if (result <= -1) {
		return -1;
	}
	if (result >= 1) {
		return 1;
	}
	return 0;
}

export function compareAttributeToken(
	a: AttributeToken,
	b: AttributeToken,
	sortAttributesEnd: string[],
	sortAttributesBeginning: string[]
): CompareResult {
	const sortPatternsBeginning: RegExp[] = sortAttributesBeginning.map((sort) => new RegExp(sort)).reverse();
	const sortPatternsEnd: RegExp[] = sortAttributesEnd.map((sort) => new RegExp(sort));

	const aName = a.name;
	const bName = b.name;

	const aBeginningIndex: number = sortPatternsBeginning.findIndex((pattern) => pattern.test(aName));
	const bBeginningIndex: number = sortPatternsBeginning.findIndex((pattern) => pattern.test(bName));
	const beginning = aBeginningIndex - bBeginningIndex;

	if (beginning > 0) return -1;
	if (beginning < 0) return 1;

	const aEndIndex: number = sortPatternsEnd.findIndex((pattern) => pattern.test(aName));
	const bEndIndex: number = sortPatternsEnd.findIndex((pattern) => pattern.test(bName));
	const end = aEndIndex - bEndIndex;

	if (end > 0) return 1;
	if (end < 0) return -1;

	if (aName > bName) return 1;
	if (aName < bName) return -1;

	return 0;
}

export function partialSort<T>(arr: T[], start: number, end: number, compareFn?: (a: T, b: T) => number): T[] {
	const preSort: T[] = [...arr].slice(0, start);
	const postSort: T[] = [...arr].slice(end);
	const sorted: T[] = [...arr].slice(start, end).sort(compareFn);
	return [...preSort, ...sorted, ...postSort];
}
