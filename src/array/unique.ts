/**
 * @file Contains utility functions for array manipulation.
 */

/**
 * Removes duplicate elements from an array.
 * This function preserves the original order of the elements.
 *
 * @template T The type of the elements in the array.
 * @param {T[]} arr The array to process.
 * @returns {T[]} A new array containing only the unique elements.
 *
 * @example
 * const numbers = [1, 2, 2, 3, 4, 4, 4];
 * const uniqueNumbers = unique(numbers);
 * // returns [1, 2, 3, 4]
 *
 * @example
 * const users = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }];
 * const uniqueUsers = unique(users);
 * // returns [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }]
 * // Note: This will not work for objects unless a custom comparator is used.
 */
export const unique = <T>(arr: T[]): T[] => {
    return [...new Set(arr)];
};