/**
 * @file Contains utility functions for string manipulation.
 */

/**
 * Capitalizes the first letter of a string.
 * This function returns a new string with the first character converted to uppercase
 * and the rest of the string remaining unchanged.
 *
 * @param {string} str The string to capitalize.
 * @returns {string} The new string with the first letter capitalized.
 *
 * @example
 * capitalize('hello world'); // returns "Hello world"
 * capitalize('foo bar');     // returns "Foo bar"
 */
export const capitalize = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};