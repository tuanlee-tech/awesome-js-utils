/**
 * @file Contains utility functions for handling DOM events.
 */

/**
 * Attaches an event listener to an element that fires only once, then automatically removes itself.
 *
 * @param {HTMLElement} element The HTML element to listen for the event on.
 * @param {string} event The name of the event (e.g., 'click', 'animationend').
 * @param {EventListener} handler The function to execute when the event fires.
 *
 * @example
 * const button = document.getElementById('my-button');
 * once(button, 'click', () => {
 * alert('This message will only show once!');
 * });
 */
export const once = (element: HTMLElement, event: string, handler: EventListener): void => {
    const wrapper = (e: Event) => {
        handler(e);
        element.removeEventListener(event, wrapper);
    };
    element.addEventListener(event, wrapper);
};