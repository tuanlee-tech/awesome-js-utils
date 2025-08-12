/**
 * @file Contains utility functions for data validation.
 */

/**
 * Validates an email address using a regular expression.
 * This function performs a basic format check to ensure the email structure is valid.
 *
 * @param {string} email The email address string to validate.
 * @returns {boolean} `true` if the email has a valid format, `false` otherwise.
 *
 * @example
 * isEmail('test@example.com');    // returns true
 * isEmail('invalid-email');       // returns false
 */
export const isEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};