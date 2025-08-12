/**
 * @file Contains utility functions for accessing object properties.
 */

/**
 * Safely retrieves a nested property from an object using a path string.
 * This prevents runtime errors if intermediate properties in the path do not exist.
 *
 * @param {object} obj The object to query.
 * @param {string} path The property path, separated by dots (e.g., 'a.b.c').
 * @param {any} [defaultValue] The default value to return if the property is not found.
 * @returns {any} The value of the property or the default value.
 *
 * @example
 * const user = { info: { name: 'Alice' } };
 * getProp(user, 'info.name');          // returns 'Alice'
 * getProp(user, 'info.age');           // returns undefined
 * getProp(user, 'info.age', 25);       // returns 25
 */
export const getProp = (obj: object, path: string, defaultValue?: any): any => {
    const result = path.split('.').reduce((acc: any, curr) => (acc && acc[curr]), obj);
    return result !== undefined ? result : defaultValue;
};