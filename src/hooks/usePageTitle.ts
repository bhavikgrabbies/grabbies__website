import { useEffect } from 'react';

export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title}: Grabbies Smart Vending`;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content') ?? undefined;
    if (description) {
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (description && meta && previousDescription !== undefined) {
        meta.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
