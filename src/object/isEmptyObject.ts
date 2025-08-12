/**
 * @file Contains utility functions for object manipulation.
 */

/**
 * Checks if a value is an empty object (`{}`).
 * This function returns `true` only for plain objects that have no own enumerable properties.
 *
 * @param {object} obj The object to check.
 * @returns {boolean} `true` if the object is empty, `false` otherwise.
 *
 * @example
 * isEmptyObject({});          // returns true
 * isEmptyObject({ a: 1 });    // returns false
 * isEmptyObject([]);          // returns false
 * isEmptyObject(null);        // returns false
 */
export const isEmptyObject = (obj: object): boolean => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};