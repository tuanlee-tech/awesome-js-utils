/**
 * @file Contains utility functions for checking scroll position.
 */

/**
 * Checks if a given element's scroll position is at or near the bottom.
 *
 * @param {HTMLElement} element The scrollable element to check.
 * @param {number} [threshold=0] The distance from the bottom in pixels to consider as "scrolled to bottom".
 * @returns {boolean} `true` if the element is at the bottom, `false` otherwise.
 *
 * @example
 * const container = document.getElementById('scroll-container');
 * container.addEventListener('scroll', () => {
 * if (isScrolledToBottom(container, 50)) {
 * console.log('User has reached the bottom!');
 * }
 * });
 */
export const isScrolledToBottom = (element: HTMLElement, threshold = 0): boolean => {
    const { scrollTop, scrollHeight, clientHeight } = element;
    return scrollHeight - scrollTop - clientHeight <= threshold;
};