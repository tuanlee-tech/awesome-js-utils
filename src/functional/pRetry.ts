/**
 * @file Contains utility functions for handling asynchronous operations.
 */

/**
 * Retries an async function a specified number of times with an exponential backoff delay.
 * This is useful for handling flaky network requests or unreliable APIs.
 *
 * @param {() => Promise<any>} fn The async function to execute and retry.
 * @param {number} retries The number of times to retry the function.
 * @param {number} [delay=100] The initial delay in milliseconds before the first retry. The delay doubles with each retry.
 * @returns {Promise<any>} A promise that resolves with the result of the function or rejects after all retries have failed.
 *
 * @example
 * const fetchUserData = async () => {
 * // Assume this API call fails sometimes
 * const response = await fetch('https://api.example.com/user');
 * if (!response.ok) throw new Error('Failed to fetch user data');
 * return response.json();
 * };
 *
 * pRetry(fetchUserData, 3, 200)
 * .then(data => console.log('Data fetched successfully:', data))
 * .catch(error => console.error('All retries failed:', error.message));
 */
export const pRetry = async (
    fn: () => Promise<any>,
    retries: number,
    delay = 100
): Promise<any> => {
    try {
        return await fn();
    } catch (error) {
        if (retries <= 0) {
            throw error;
        }
        await new Promise(res => setTimeout(res, delay));
        return pRetry(fn, retries - 1, delay * 2);
    }
};