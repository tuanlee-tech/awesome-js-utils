/**
 * @file Contains utility functions for parsing and formatting Axios errors.
 */

import { isAxiosError } from "./isAxiosError";

/**
 * Parses an Axios error object and returns a user-friendly error message.
 * This function handles different types of Axios errors, including server responses, network errors, and request timeouts.
 *
 * @param {any} error The Axios error object.
 * @returns {string} A user-friendly error message.
 *
 * @example
 * try {
 * await axios.post('/api/create', { data });
 * } catch (error) {
 * const errorMessage = parseAxiosError(error);
 * // errorMessage might be "Không thể kết nối đến máy chủ." or "Tên người dùng đã tồn tại."
 * alert(errorMessage);
 * }
 */
export const parseAxiosError = (error: any): string => {
    if (isAxiosError(error)) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response) {
            // Prioritize a custom message from the server if available
            return error.response.data?.message || `Lỗi máy chủ: ${error.response.status}`;
        }
        // The request was made but no response was received
        else if (error.request) {
            return 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng của bạn.';
        }
    }

    // Something happened in setting up the request that triggered an Error
    return error.message || 'Đã có lỗi không xác định xảy ra.';
};