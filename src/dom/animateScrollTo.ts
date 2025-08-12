/**
 * @file Contains utility functions for smooth scrolling.
 */

/**
 * Smoothly scrolls the window to a specified vertical position.
 *
 * @param {number} y The target vertical scroll position in pixels.
 * @param {number} [duration=300] The duration of the scroll animation in milliseconds.
 *
 * @example
 * // Scroll to the top of the page in 500ms
 * animateScrollTo(0, 500);
 */
export const animateScrollTo = (y: number, duration = 300): void => {
    const startingY = window.pageYOffset;
    const diff = y - startingY;
    let start: number | null = null;

    const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1);
        window.scrollTo(0, startingY + diff * percent);

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};