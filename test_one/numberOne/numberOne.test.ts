import { sortDescending } from './numberOne';
import { describe, expect, test } from '@jest/globals';

describe('sortDescending', () => {
    test('should sort numbers in descending order', () => {
        const input = [1, 2, 4, 3, 5, 3, 2, 1];
        const expected = [5, 4, 3, 3, 2, 2, 1, 1];
        expect(sortDescending(input)).toEqual(expected);
    });
    
    test('should handle array with duplicate numbers', () => {
        const input = [3, 3, 3, 3];
        const expected = [3, 3, 3, 3];
        expect(sortDescending(input)).toEqual(expected);
    });

    test('should handle empty array', () => {
        const input: number[] = [];
        const expected: number[] = [];
        expect(sortDescending(input)).toEqual(expected);
    });

    test('should handle array with single element', () => {
        const input = [1];
        const expected = [1];
        expect(sortDescending(input)).toEqual(expected);
    });

    test('should handle array with negative numbers', () => {
        const input = [-1, -5, 0, -2, 3];
        const expected = [3, 0, -1, -2, -5];
        expect(sortDescending(input)).toEqual(expected);
    });
});