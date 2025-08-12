/**
 * @file Contains utility functions for formatting and manipulating numbers.
 */

/**
 * Formats a number with thousand separators.
 * This function can be used to format currency values or large numbers for better readability.
 *
 * @param {number} num The number to format.
 * @param {string} [separator=','] The character to use as the thousand separator.
 * @returns {string} The formatted string.
 *
 * @example
 * const price = 1234567.89;
 * const formattedPrice = formatCurrency(price);
 * // returns "1,234,567.89"
 *
 * @example
 * const bigNumber = 987654321;
 * const formattedNumber = formatCurrency(bigNumber, '.');
 * // returns "987.654.321"
 */
export const formatCurrency = (num: number, separator = ','): string => {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join('.');
};