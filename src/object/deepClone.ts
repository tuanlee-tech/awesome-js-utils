/**
 * @file Contains utility functions for cloning objects.
 */

/**
 * Creates a deep clone of an object or array.
 * This function uses a simple but effective method (`JSON.parse` and `JSON.stringify`)
 * to create a new object without any references to the original.
 * Note: This method does not work for functions, Dates, Maps, Sets, or other complex types.
 *
 * @template T The type of the object to clone.
 * @param {T} obj The object to deep clone.
 * @returns {T} The new, deeply cloned object.
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const cloned = deepClone(original);
 * cloned.b.c = 3;
 * // original.b.c remains 2
 */
export const deepClone = <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
};