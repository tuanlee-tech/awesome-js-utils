/**
 * @file Contains a utility function for generating a UUID.
 */

/**
 * Generates a Universally Unique Identifier (UUID) version 4.
 * This function creates a unique string identifier, which is useful for assigning
 * unique IDs to elements, data records, or for various keying purposes.
 *
 * @returns {string} A new UUID string.
 *
 * @example
 * const newId = uuid();
 * // returns a string like "1b9d675c-af4b-468e-9f84-18c991b11f37"
 */
export const uuid = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};