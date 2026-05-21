import { useState, useEffect } from 'react';

/**
 * Tracks scroll progress (0–1) and whether the user has scrolled past a threshold.
 * @param {number} threshold - px from top to consider "scrolled" (default 60)
 */
export function useScrollProgress(threshold = 60) {
  const [progress, setProgress]   = useState(0);
  const [scrolled, setScrolled]   = useState(false);
  const [showBack,  setShowBack]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setScrolled(scrollTop > threshold);
      setShowBack(scrollTop > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { progress, scrolled, showBack };
}
