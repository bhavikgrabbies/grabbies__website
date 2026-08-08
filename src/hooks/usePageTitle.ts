import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} — Grabbies Smart Vending`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
