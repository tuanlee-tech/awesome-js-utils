/**
 * @file Contains utility functions for handling Promise collections.
 */

/**
 * A polyfill for `Promise.allSettled`. It waits for all promises in an iterable to be settled
 * (either fulfilled or rejected) and returns an array of objects describing the outcome of each promise.
 *
 * @param {Promise<any>[]} promises An iterable of promises.
 * @returns {Promise<Array<{ status: 'fulfilled' | 'rejected', value?: any, reason?: any }>>} A promise that resolves to an array of result objects.
 *
 * @example
 * const p1 = Promise.resolve(1);
 * const p2 = Promise.reject('error');
 * const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));
 *
 * pAllSettled([p1, p2, p3])
 * .then(results => {
 * console.log(results);
 * // Expected output:
 * // [
 * //   { status: 'fulfilled', value: 1 },
 * //   { status: 'rejected', reason: 'error' },
 * //   { status: 'fulfilled', value: 3 }
 * // ]
 * });
 */
export const pAllSettled = (
    promises: Promise<any>[]
): Promise<Array<{ status: 'fulfilled' | 'rejected'; value?: any; reason?: any }>> => {
    return Promise.all(
        promises.map((p) =>
            p
                .then((value) => ({ status: 'fulfilled' as const, value })) // Use `as const`
                .catch((reason) => ({ status: 'rejected' as const, reason })) // Use `as const`
        )
    );
};
// Alternatively, you can use the following syntax for better type inference:
// p.then(value => ({ status: 'fulfilled', value } as { status: 'fulfilled', value: any }))
//  .catch(reason => ({ status: 'rejected', reason } as { status: 'rejected', reason: any }))