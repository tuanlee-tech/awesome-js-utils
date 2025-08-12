/**
 * @file Contains utility functions for checking user's motion preferences.
 */

/**
 * Checks if the user has enabled the "prefers reduced motion" setting on their operating system.
 * This is useful for improving accessibility by disabling non-essential animations.
 *
 * @returns {boolean} `true` if the user prefers reduced motion, `false` otherwise.
 *
 * @example
 * if (prefersReducedMotion()) {
 * // Disable complex animations
 * } else {
 * // Enable smooth, fancy animations
 * }
 */
export const prefersReducedMotion = (): boolean =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;