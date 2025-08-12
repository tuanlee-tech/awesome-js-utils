/**
 * @file Contains utility functions for converting string cases.
 */

/**
 * Converts a string to kebab-case.
 * This function replaces spaces, underscores, and camelCase boundaries with a hyphen.
 *
 * @param {string} str The string to convert.
 * @returns {string} The new string in kebab-case.
 *
 * @example
 * toKebabCase('helloWorld');       // returns "hello-world"
 * toKebabCase('Hello World');      // returns "hello-world"
 * toKebabCase('foo-bar');          // returns "foo-bar"
 * toKebabCase('foo_bar');          // returns "foo-bar"
 */
export const toKebabCase = (str: string): string => {
    return str
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2') // Handles camelCase
        .replace(/[\s_]+/g, '-') // Replaces spaces and underscores
        .toLowerCase();
};