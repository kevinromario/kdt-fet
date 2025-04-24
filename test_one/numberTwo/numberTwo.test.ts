import { findMaxSubarraySum } from './numberTwo';
import { describe, expect, test } from '@jest/globals';

describe('findMaxSubarraySum', () => {
    test('should find maximum subarray sum with size 2', () => {
        const input = [100, 200, 300, 400];
        const size = 2;
        expect(findMaxSubarraySum(input, size)).toBe(700);
    });

    test('should find maximum subarray sum with size 4', () => {
        const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
        const size = 4;
        expect(findMaxSubarraySum(input, size)).toBe(39);
    });

    test('should handle negative numbers', () => {
        const input = [-3, 4, 0, -2, 6, -1];
        const size = 2;
        expect(findMaxSubarraySum(input, size)).toBe(5);
    });

    test('should return null when size is greater than array length', () => {
        const input = [1, 2, 3];
        const size = 4;
        expect(findMaxSubarraySum(input, size)).toBe(null);
    });

    test('should handle array with single element', () => {
        const input = [5];
        const size = 1;
        expect(findMaxSubarraySum(input, size)).toBe(5);
    });

    test('should handle array with all same numbers', () => {
        const input = [2, 2, 2, 2];
        const size = 2;
        expect(findMaxSubarraySum(input, size)).toBe(4);
    });

    test('should handle size 1 with multiple elements', () => {
        const input = [1, 5, 2, 3, 4];
        const size = 1;
        expect(findMaxSubarraySum(input, size)).toBe(5);
    });
});