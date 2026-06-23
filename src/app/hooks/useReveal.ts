import { useEffect, useRef } from 'react';

type RevealType = 'mask' | 'fade' | 'scale' | 'left';

interface UseRevealOptions {
  type?: RevealType;
  threshold?: number;
  delay?: number;
  /** Stagger index — auto-calculates delay based on index (60ms per step) */
  stagger?: number;
}

/**
 * IntersectionObserver-based reveal hook.
 * Adds a CSS class that triggers a CSS animation when element enters viewport.
 * Supports stagger via `stagger` index (overrides `delay` when set).
 * Returns a ref to attach to the target element.
 */
export function useReveal<T extends HTMLElement>({
  type = 'fade',
  threshold = 0.15,
  delay = 0,
  stagger,
}: UseRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const className =
      type === 'mask' ? 'reveal-mask' :
      type === 'scale' ? 'reveal-scale' :
      type === 'left' ? 'reveal-left' :
      'reveal-fade';

    el.classList.add(className);

    // Stagger overrides delay: index * 60ms
    const finalDelay = stagger !== undefined ? stagger * 60 : delay;
    if (finalDelay > 0) {
      el.style.setProperty('--reveal-delay', `${finalDelay}ms`);
    }

    // If already in view (e.g. above fold), reveal immediately
    const rect = el.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInView) {
      requestAnimationFrame(() => {
        el.classList.add('is-visible');
      });
      return undefined;
    }

    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!cancelled && entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [type, threshold, delay, stagger]);

  return ref;
}
