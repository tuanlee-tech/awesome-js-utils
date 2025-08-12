/**
 * @file Contains utility functions for checking platform status.
 */

/**
 * Checks the current online status of the browser.
 * This function uses the `navigator.onLine` API, which returns a boolean indicating
 * whether the browser is connected to the internet.
 *
 * @returns {boolean} `true` if the browser is online, `false` otherwise.
 *
 * @example
 * if (isOnline()) {
 * console.log('You are online!');
 * } else {
 * console.log('You are currently offline.');
 * }
 */
export const isOnline = (): boolean => navigator.onLine;