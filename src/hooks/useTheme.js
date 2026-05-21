import { useState, useEffect } from 'react';

/**
 * Persists theme preference in localStorage and syncs the data-theme attribute.
 */
export function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('nk-theme');
    return saved ? saved === 'dark' : true; // default dark
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? '' : 'light');
    localStorage.setItem('nk-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggle = () => setDark((d) => !d);
  return { dark, toggle };
}
