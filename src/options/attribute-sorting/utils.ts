import { AttributeToken } from 'pug-lexer';

type CompareResult = -1 | 0 | 1;

const VUE_BINDING_MATCHER = /^(?:v-bind)?:(.*)/;
const ANGULAR_BINDING_MATCHER = /^(?:\()(.*)(?:\))$/;

function compareByBindingPrecedence(left: string, right: string, bindingMatcher: RegExp): CompareResult {
	if (bindingMatcher.exec(left)?.[1] === right) {
		return 1;
	}
	if (bindingMatcher.exec(right)?.[1] === left) {
		return -1;
	}
	return 0;
}

function compareByVueBindingPrecedence(left: string, right: string): CompareResult {
	return compareByBindingPrecedence(left, right, VUE_BINDING_MATCHER);
}

function compareByAngularBindingPrecedence(left: string, right: string): CompareResult {
	return compareByBindingPrecedence(left, right, ANGULAR_BINDING_MATCHER);
}

function trimBinding(value: string, bindingMatcher: RegExp): string {
	return bindingMatcher.exec(value)?.[1] ?? value;
}

function trimVueBinding(value: string): string {
	return trimBinding(value, VUE_BINDING_MATCHER);
}

function trimAngularBinding(value: string): string {
	return trimBinding(value, ANGULAR_BINDING_MATCHER);
}

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

function compareByLiteral(left: string, right: string): CompareResult {
	if (left < right) {
		return -1;
	}
	if (left > right) {
		return 1;
	}
	return 0;
}

export function compareAttributeToken(
	a: AttributeToken,
	b: AttributeToken,
	sortAttributes: string[],
	moveToEnd: boolean = false
): CompareResult {
	const sortPatterns: RegExp[] = sortAttributes.map((sort) => new RegExp(sort));

	const aName = a.name;
	const bName = b.name;

	let result: CompareResult = 0;

	// let result: CompareResult = compareByVueBindingPrecedence(aName, bName);

	// if (result === 0) {
	// 	aName = trimVueBinding(aName);
	// 	bName = trimVueBinding(bName);

	// 	result = compareByAngularBindingPrecedence(aName, bName);
	// }

	// if (result === 0) {
	// 	aName = trimAngularBinding(aName);
	// 	bName = trimAngularBinding(bName);

	// 	const aIndex: number = sortAttributes.indexOf(aName);
	// 	const bIndex: number = sortAttributes.indexOf(bName);
	// 	result = compareByIndex(aIndex, bIndex);
	// }

	if (result === 0) {
		let aIndex: number = moveToEnd ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
		let bIndex: number = moveToEnd ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
		let aFound = false;
		let bFound = false;
		for (let index = 0; index < sortPatterns.length; index++) {
			const pattern = sortPatterns[index];
			if (!aFound && pattern.test(aName)) {
				aIndex = index;
				aFound = true;
			}
			if (!bFound && pattern.test(bName)) {
				bIndex = index;
				bFound = true;
			}
			if (aFound && bFound) {
				break;
			}
		}

		result = compareByIndex(aIndex, bIndex);
	}

	// if (result === 0) {
	// 	result = compareByLiteral(aName, bName);
	// }

	// if (result !== 0 && reverseCompare) {
	// 	if (result === 1) {
	// 		result = -1;
	// 	} else {
	// 		result = 1;
	// 	}
	// }

	return result;
}

export function partialSort<T>(arr: T[], start: number, end: number, compareFn?: (a: T, b: T) => number): T[] {
	const preSorted: T[] = arr.slice(0, start);
	const postSorted: T[] = arr.slice(end);
	const sorted: T[] = arr.slice(start, end).sort(compareFn);
	arr.length = 0;
	arr.push(...preSorted.concat(sorted).concat(postSorted));
	return arr;
}
