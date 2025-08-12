/**
 * @file Contains utility functions for optimizing function calls.
 */

/**
 * Creates a debounced function that delays invoking `func` until after `delay` milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param {Function} func The function to debounce.
 * @param {number} delay The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 *
 * @example
 * // A common use case is for search input fields.
 * const handleSearch = (query) => console.log('Searching for:', query);
 * const debouncedSearch = debounce(handleSearch, 300);
 *
 * // This will only log after the user stops typing for 300ms
 * debouncedSearch('a');
 * debouncedSearch('ab');
 * debouncedSearch('abc');
 */
export const debounce = (func: Function, delay: number): Function => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};