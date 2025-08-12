/**
 * @file Contains utility functions for formatting and manipulating dates.
 */

/**
 * Formats a Date object into a string based on a specified format pattern.
 * Note: For more complex and robust date formatting, consider using a dedicated library like `date-fns` or `dayjs`.
 *
 * @param {Date} date The Date object to format.
 * @param {string} format The format string. Supported placeholders: 'yyyy', 'MM', 'dd', 'HH', 'mm', 'ss'.
 * @returns {string} The formatted date string.
 *
 * @example
 * const now = new Date(2025, 7, 12, 17, 30, 0); // 12/08/2025 17:30:00
 * const formattedDate = formatDate(now, 'yyyy-MM-dd HH:mm:ss');
 * // returns "2025-08-12 17:30:00"
 */
export const formatDate = (date: Date, format: string): string => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return format
        .replace('yyyy', String(year))
        .replace('MM', month)
        .replace('dd', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
};