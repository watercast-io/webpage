'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export enum Language {
    en = "English",
    es = "Español",
}
  

export default function LanguageChanger() {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);

  const handleChange = e => {
    const newLocale = e || i18nConfig.defaultLocale;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  const lang : string = Language[currentLocale as string];

  return (
    // <select onChange={handleChange} value={currentLocale}>
    //   <option value="en">English</option>
    //   <option value="es">Español</option>
    // </select>
    <Select onValueChange={handleChange} value={currentLocale}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={lang}  />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="en">English</SelectItem>
        </SelectContent>
    </Select>

  );
}