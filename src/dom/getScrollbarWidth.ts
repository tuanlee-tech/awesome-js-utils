/**
 * @file Contains utility functions for calculating scrollbar width.
 */

/**
 * Calculates the width of the browser's scrollbar.
 * This is useful for preventing layout shifts when the scrollbar appears/disappears.
 *
 * @returns {number} The width of the scrollbar in pixels. Returns 0 if the scrollbar is not visible.
 *
 * @example
 * const scrollbarWidth = getScrollbarWidth();
 * document.body.style.paddingRight = `${scrollbarWidth}px`;
 */
export const getScrollbarWidth = (): number => {
    // Create a temporary element to measure
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    // Create an inner element to compare
    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Clean up the temporary elements
    document.body.removeChild(outer);

    return scrollbarWidth;
};