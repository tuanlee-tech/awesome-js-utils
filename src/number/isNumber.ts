/**
 * @file Contains utility functions for type checking numbers.
 */

/**
 * Checks if a value is a valid number.
 * This function returns `false` for `null`, `undefined`, and `NaN`.
 *
 * @param {any} value The value to check.
 * @returns {boolean} `true` if the value is a number, `false` otherwise.
 *
 * @example
 * isNumber(123);      // returns true
 * isNumber(12.34);    // returns true
 * isNumber('123');    // returns false
 * isNumber(NaN);      // returns false
 * isNumber(null);     // returns false
 * isNumber(undefined);// returns false
 */
export const isNumber = (value: any): boolean => {
    return typeof value === 'number' && !isNaN(value);
};