export type Locale = (typeof locales)[number];

export const locales = ['en', 'es', 'fr', 'pt', 'de', 'it'] as const;
export const defaultLocale: Locale = 'en';
