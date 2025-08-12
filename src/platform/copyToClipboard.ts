/**
 * @file Contains utility functions for interacting with the system clipboard.
 */

/**
 * Copies a given text string to the user's clipboard.
 * This function uses the modern `navigator.clipboard` API and includes a fallback
 * for older browsers that do not support it. It is an async function and returns a Promise.
 *
 * @param {string} text The text to be copied to the clipboard.
 * @returns {Promise<void>} A Promise that resolves if the copy operation is successful, or rejects with an error.
 *
 * @example
 * copyToClipboard('Hello, world!')
 * .then(() => console.log('Text copied!'))
 * .catch(err => console.error('Failed to copy text: ', err));
 */
export const copyToClipboard = async (text: string): Promise<void> => {
    if (!navigator.clipboard) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
        } catch (err) {
            document.body.removeChild(textArea);
            console.error('Failed to copy text using fallback method', err);
            throw new Error('Failed to copy text.');
        }
        return;
    }
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy text using modern API', err);
        throw new Error('Failed to copy text.');
    }
};