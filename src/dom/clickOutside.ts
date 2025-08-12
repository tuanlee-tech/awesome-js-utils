/**
 * @file Contains utility functions for handling click events outside of an element.
 */

/**
 * Listens for a click event outside of a specified element.
 * This is useful for closing dropdowns, modals, or menus.
 *
 * @param {HTMLElement} element The element to check against. Clicks inside this element will be ignored.
 * @param {EventListener} handler The function to execute when a click outside occurs.
 * @returns {() => void} A function to explicitly remove the event listener.
 *
 * @example
 * const dropdown = document.getElementById('my-dropdown');
 * const removeListener = clickOutside(dropdown, () => {
 * dropdown.style.display = 'none';
 * removeListener(); // Clean up the listener after closing
 * });
 */
export const clickOutside = (element: HTMLElement, handler: EventListener): () => void => {
    const listener = (event: MouseEvent) => {
        if (!element.contains(event.target as Node)) {
            handler(event);
        }
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
};