/**
 * @file Contains utility functions for calculating time differences.
 */

/**
 * Calculates the time elapsed since a given date and returns it as a human-readable string.
 *
 * @param {Date} date The past date to compare against the current time.
 * @returns {string} A string representing the time elapsed (e.g., "5 phút trước", "2 ngày trước").
 *
 * @example
 * const postDate = new Date();
 * postDate.setMinutes(postDate.getMinutes() - 5);
 * const timeElapsed = timeAgo(postDate);
 * // returns "5 phút trước"
 */
export const timeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
        return `${Math.floor(interval)} năm trước`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return `${Math.floor(interval)} tháng trước`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return `${Math.floor(interval)} ngày trước`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return `${Math.floor(interval)} giờ trước`;
    }
    interval = seconds / 60;
    if (interval > 1) {
        return `${Math.floor(interval)} phút trước`;
    }

    return 'vài giây trước';
};