/**
 * @file Contains utility functions for shuffling arrays.
 */

/**
 * Randomly shuffles the elements of an array using the Fisher-Yates algorithm.
 * This function returns a new shuffled array without mutating the original one.
 *
 * @template T The type of the elements in the array.
 * @param {T[]} arr The array to shuffle.
 * @returns {T[]} A new array with its elements in a random order.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const shuffledNumbers = shuffle(numbers);
 * // returns a new array like [3, 5, 1, 4, 2]
 */
export const shuffle = <T>(arr: T[]): T[] => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};