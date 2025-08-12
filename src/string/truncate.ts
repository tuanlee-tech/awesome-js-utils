/**
 * @file Contains utility functions for shortening strings.
 */

/**
 * Truncates a string to a specified length and appends an ellipsis.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string before it is truncated.
 * @param {string} [ellipsis='...'] The string to append to the truncated string.
 * @returns {string} The truncated string.
 *
 * @example
 * truncate('Hello, world!', 8);          // returns "Hello, w..."
 * truncate('Short string', 20);         // returns "Short string"
 * truncate('A very long text', 10, '...'); // returns "A very lon..."
 */
export const truncate = (str: string, length: number, ellipsis = '...'): string => {
    if (str.length <= length) {
        return str;
    }
    return str.slice(0, length) + ellipsis;
};