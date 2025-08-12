/**
 * @file Contains utility functions for handling and identifying errors.
 */

/**
 * Checks if an error object is an Axios-related error.
 * An Axios error typically contains a `response` object and a `config` object.
 * This is useful for type-guarding and handling API-related errors specifically.
 *
 * @param {any} error The error object to check.
 * @returns {boolean} `true` if the error is an Axios error, `false` otherwise.
 *
 * @example
 * try {
 * await axios.get('/api/data');
 * } catch (error) {
 * if (isAxiosError(error)) {
 * // Handle Axios-specific error logic
 * console.error('An API error occurred:', error.response.status);
 * }
 * }
 */
export const isAxiosError = (error: any): boolean => {
    return typeof error === 'object' && error !== null && 'config' in error && 'isAxiosError' in error;
};