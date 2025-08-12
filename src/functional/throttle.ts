/**
 * @file Contains utility functions for controlling the rate of function calls.
 */

/**
 * Creates a throttled function that is restricted to invoking `func` at most once every `delay` milliseconds.
 * This is useful for performance-intensive events like `scroll` or `resize`.
 *
 * @param {Function} func The function to throttle.
 * @param {number} delay The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 *
 * @example
 * // A common use case is for handling resize events.
 * const handleResize = () => console.log('Window resized!');
 * const throttledResize = throttle(handleResize, 200);
 *
 * // This will only log once every 200ms, even if the user resizes quickly
 * window.addEventListener('resize', throttledResize);
 */
export const throttle = (func: Function, delay: number): Function => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastArgs: any[] = [];

    return (...args: any[]) => {
        lastArgs = args;
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func(...lastArgs);
                timeoutId = null;
            }, delay);
        }
    };
};