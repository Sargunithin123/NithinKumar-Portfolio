import { useState, useEffect } from 'react';

/**
 * Typing / deleting animation hook.
 * @param {string[]} texts  - Array of strings to cycle through
 * @param {number}   speed  - Typing speed in ms per character (default 85)
 * @returns {string}        - Current displayed text slice
 */
export function useTyping(texts, speed = 85) {
  const [index, setIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timer;

    if (!deleting && charCount < current.length) {
      // Still typing forward
      timer = setTimeout(() => setCharCount((c) => c + 1), speed);
    } else if (!deleting && charCount === current.length) {
      // Pause at end before deleting
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charCount > 0) {
      // Deleting
      timer = setTimeout(() => setCharCount((c) => c - 1), speed / 2);
    } else {
      // Move to next word
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [index, charCount, deleting, texts, speed]);

  return texts[index].slice(0, charCount);
}
