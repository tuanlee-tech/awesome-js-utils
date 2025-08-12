/**
 * @file Contains utility functions for comparing objects.
 */

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * This function recursively compares properties of objects and elements of arrays.
 *
 * @param {any} a The first value to compare.
 * @param {any} b The second value to compare.
 * @returns {boolean} `true` if the values are deeply equal, `false` otherwise.
 *
 * @example
 * deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 });                 // returns true
 * deepEqual({ a: 1, b: [2] }, { a: 1, b: [2] });             // returns true
 * deepEqual({ a: 1, b: [2] }, { a: 1, b: [3] });             // returns false
 * deepEqual(1, '1');                                         // returns false
 */
export const deepEqual = (a: any, b: any): boolean => {
    if (a === b) return true;

    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor) return false;

        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) return false;

        for (let i = 0; i < keysA.length; i++) {
            const key = keysA[i];
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }

    return false;
};