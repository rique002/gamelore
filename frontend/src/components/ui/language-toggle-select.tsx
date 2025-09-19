'use client';

import Image from 'next/image';
import * as React from 'react';
import { useTransition } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';

type Props = {
  defaultValue: string;
  items: Array<{ img: string; label: string; value: string }>;
};

export function LanguageToggleSelect({ defaultValue, items }: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center gap-2"
          disabled={isPending}
          variant="outline"
        >
          <Image
            alt={
              items.find((item) => item.value === defaultValue)?.label ||
              'English'
            }
            height={20}
            src={
              items.find((item) => item.value === defaultValue)?.img ||
              '/flags/united-kingdom.png'
            }
            width={20}
          />
          <span>
            {items.find((item) => item.value === defaultValue)?.label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => onChange(item.value)}
          >
            <div className="flex items-center gap-2">
              <Image alt={item.label} height={20} src={item.img} width={20} />
              <span>{item.label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
