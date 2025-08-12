/**
 * @file Contains utility functions for password validation.
 */

/**
 * Checks if a password meets a set of strength requirements.
 * The password must contain at least one uppercase letter, one lowercase letter,
 * one number, one special character, and be at least 8 characters long.
 *
 * @param {string} password The password string to validate.
 * @returns {boolean} `true` if the password is strong, `false` otherwise.
 *
 * @example
 * isPasswordStrong('Password123!');    // returns true
 * isPasswordStrong('password123');     // returns false (missing uppercase and special character)
 */
export const isPasswordStrong = (password: string): boolean => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
        password.length >= minLength &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecialChar
    );
};