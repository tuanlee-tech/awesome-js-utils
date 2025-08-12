/**
 * @file Contains utility functions for working with URLs.
 */

/**
 * Retrieves search parameters from the current URL.
 * This function can return all parameters as an object or a single parameter's value if a key is provided.
 *
 * @param {string} [key] The key of the parameter to retrieve. If not provided, all parameters are returned.
 * @returns {Record<string, string> | string | null} An object of all parameters, a single parameter's value, or `null` if the key is not found.
 *
 * @example
 * // URL is "https://example.com?id=123&name=test"
 * getSearchParams();           // returns { id: '123', name: 'test' }
 * getSearchParams('id');         // returns '123'
 * getSearchParams('invalid');    // returns null
 */
export const getSearchParams = (key?: string): Record<string, string> | string | null => {
    const params = new URLSearchParams(window.location.search);
    if (key) {
        return params.get(key);
    }
    return Object.fromEntries((params as any).entries());
};