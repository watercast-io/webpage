'server-only';

import { createIntl,createIntlCache } from '@formatjs/intl';

export default async function getIntl(locale, namespace) {
  const messages = (await import(`@/locales/${locale}/${namespace}.json`)).default;
  const cache = createIntlCache()

  return createIntl({
    locale: locale,
    messages: messages || {}
  }, cache);
}