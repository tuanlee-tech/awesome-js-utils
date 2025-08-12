/**
 * @file Contains utility functions for URL validation.
 */

/**
 * Validates a URL address.
 * This function uses a regular expression to perform a basic format check.
 * Note: For a more robust solution, especially in production environments,
 * it's recommended to use the native URL constructor or a dedicated library.
 *
 * @param {string} url The URL string to validate.
 * @returns {boolean} `true` if the URL has a valid format, `false` otherwise.
 *
 * @example
 * isValidURL('https://www.example.com');  // returns true
 * isValidURL('ftp://example.com');        // returns false (regex check)
 * isValidURL('invalid-url');              // returns false
 */
export const isValidURL = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
};