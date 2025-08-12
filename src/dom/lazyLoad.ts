/**
 * @file Contains a utility function for lazy-loading DOM elements using Intersection Observer.
 */

/**
 * Initializes lazy-loading for elements with a specific data attribute.
 * This function is highly performant as it uses Intersection Observer instead of listening to scroll events.
 * It's ideal for lazy-loading images, iframes, or other content.
 *
 * @param {string} selector The CSS selector for elements to observe (e.g., 'img[data-src]', '.lazy-load-item').
 * @param {Function} [callback] An optional callback function to execute when an element becomes visible. If not provided, a default handler for lazy-loading images will be used.
 * @param {object} [options] Options for the Intersection Observer API.
 * @param {string} [options.root] The element that is used as the viewport for checking visibility. Defaults to null (the document's viewport).
 * @param {string} [options.rootMargin='0px'] The margin around the root. This allows you to start loading elements before they are fully visible.
 * @param {number} [options.threshold=0] A single number or an array of numbers indicating at what percentage of the target's visibility the observer's callback should be executed.
 *
 * @returns {IntersectionObserver} The Intersection Observer instance, which can be disconnected if needed.
 *
 * @example
 * // 1. For lazy-loading images and iframes, update your HTML like this:
 * // <img data-src="path/to/image.jpg" data-srcset="path/to/image_large.jpg 2x" alt="...">
 * // <iframe data-src="path/to/content"></iframe>
 * //
 * // 2. Then, call the function with the appropriate selector:
 * // lazyLoad('img[data-src], iframe[data-src]');
 *
 * @example
 * // For lazy-loading custom components or modules, you can provide a custom callback:
 * // HTML: <div class="lazy-component" data-module="MyModule"></div>
 * // JS:
 * // lazyLoad('.lazy-component', (element) => {
 * //   const moduleName = element.getAttribute('data-module');
 * //   console.log(`Loading module: ${moduleName}`);
 * //   // Add your custom logic here to load the module
 * // });
 */
export const lazyLoad = (
    selector: string,
    callback?: (element: Element) => void,
    options?: IntersectionObserverInit
): IntersectionObserver => {
    const defaultCallback = (element: Element) => {
        if (element instanceof HTMLImageElement) {
            if (element.dataset.src) {
                element.src = element.dataset.src;
                delete element.dataset.src;
            }
            if (element.dataset.srcset) {
                element.srcset = element.dataset.srcset;
                delete element.dataset.srcset;
            }
        } else if (element instanceof HTMLIFrameElement) {
            if (element.dataset.src) {
                element.src = element.dataset.src;
                delete element.dataset.src;
            }
        }
    };

    const observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (callback) {
                    callback(element);
                } else {
                    defaultCallback(element);
                }
                self.unobserve(element);
            }
        });
    }, options);

    document.querySelectorAll(selector).forEach(element => {
        observer.observe(element);
    });

    return observer;
};