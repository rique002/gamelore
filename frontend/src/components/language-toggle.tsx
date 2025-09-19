import { useLocale } from 'next-intl';

import { LanguageToggleSelect } from '@/components/ui/language-toggle-select';

export function LanguageToggle() {
  const locale = useLocale();

  return (
    <LanguageToggleSelect
      defaultValue={locale}
      items={[
        {
          img: '/flags/united-kingdom.png',
          label: 'English',
          value: 'en',
        },
        {
          img: '/flags/spain.png',
          label: 'Español',
          value: 'es',
        },
        {
          img: '/flags/france.png',
          label: 'Français',
          value: 'fr',
        },
        {
          img: '/flags/portugal.png',
          label: 'Português',
          value: 'pt',
        },
        {
          img: '/flags/germany.png',
          label: 'Deutsch',
          value: 'de',
        },
        {
          img: '/flags/italy.png',
          label: 'Italiano',
          value: 'it',
        },
      ]}
    />
  );
}
