import { useEffect, useRef } from 'react';

type RevealType = 'mask' | 'fade' | 'scale';

interface UseRevealOptions {
  type?: RevealType;
  threshold?: number;
  delay?: number;
}

export function useReveal<T extends HTMLElement>({ type = 'fade', threshold = 0.15, delay = 0 }: UseRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const className = type === 'mask' ? 'reveal-mask' : type === 'scale' ? 'reveal-scale' : 'reveal-fade';
    el.classList.add(className);

    if (delay > 0) {
      el.style.setProperty('--reveal-delay', `${delay}ms`);
    }

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
  }, [type, threshold, delay]);

  return ref;
}
