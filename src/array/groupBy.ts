/**
 * @file Contains utility functions for grouping array elements.
 */

/**
 * Groups the elements of an array by a specified key.
 *
 * @template T The type of the elements in the array.
 * @param {T[]} arr The array to group.
 * @param {keyof T} key The property key to group the elements by.
 * @returns {Record<string, T[]>} An object where keys are the unique values of the specified key, and values are arrays of elements.
 *
 * @example
 * const products = [
 * { id: 1, category: 'Electronics', name: 'Laptop' },
 * { id: 2, category: 'Books', name: 'Book A' },
 * { id: 3, category: 'Electronics', name: 'Smartphone' },
 * ];
 * const groupedProducts = groupBy(products, 'category');
 * // returns {
 * //   'Electronics': [{ id: 1, ... }, { id: 3, ... }],
 * //   'Books': [{ id: 2, ... }]
 * // }
 */
export const groupBy = <T>(arr: T[], key: keyof T): Record<string, T[]> => {
    return arr.reduce((acc, curr) => {
        const groupKey = String(curr[key]);
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(curr);
        return acc;
    }, {} as Record<string, T[]>);
};