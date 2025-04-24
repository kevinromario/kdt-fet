import { sumEvenNumbers } from './numberThree';
import { describe, expect, test } from '@jest/globals';

describe('sumEvenNumbers', () => {
    test('should sum even numbers in nested object - test case 1', () => {
        const input = {
            outer: 2,
            obj: {
                inner: 2,
                otherObj: {
                    superInner: 2,
                    notANumber: true,
                    alsoNotANumber: "yup"
                }
            }
        };
        expect(sumEvenNumbers(input)).toBe(6);
    });

    test('should sum even numbers in complex nested object - test case 2', () => {
        const input = {
            a: 2,
            b: {b: 2, bb: {b: 3, bb: {b: 2}}},
            c: {c: {c: 2}, cc: 'ball', ccc: 5},
            d: 1,
            e: {e: {e: 4}, ee: 'car'}
        };
        expect(sumEvenNumbers(input)).toBe(12);
    });

    test('should handle empty object', () => {
        const input = {};
        expect(sumEvenNumbers(input)).toBe(0);
    });

    test('should handle object with no even numbers', () => {
        const input = {
            a: 1,
            b: 3,
            c: { d: 5, e: 7 }
        };
        expect(sumEvenNumbers(input)).toBe(0);
    });

    test('should handle object with non-numeric values', () => {
        const input = {
            a: "string",
            b: true,
            c: null,
            d: undefined,
            e: []
        };
        expect(sumEvenNumbers(input)).toBe(0);
    });

    test('should handle object with array values', () => {
        const input = {
            a: 2,
            b: [1, 2, 3],
            c: { d: 4 }
        };
        expect(sumEvenNumbers(input)).toBe(8);
    });

    test('should handle deeply nested objects', () => {
        const input = {
            a: { b: { c: { d: { e: 2 } } } },
            f: { g: { h: { i: 4 } } }
        };
        expect(sumEvenNumbers(input)).toBe(6);
    });

    test('should handle negative even numbers', () => {
        const input = {
            a: -2,
            b: { c: -4 },
            d: 3
        };
        expect(sumEvenNumbers(input)).toBe(-6);
    });
});