interface I18nConfig {
    locales: string[];
    defaultLocale: string;
    prefixDefault: boolean;
}

const i18nConfig: I18nConfig = {
    defaultLocale: "en",
    locales: ["en", "es"],
    prefixDefault: false,
};

export default i18nConfig;
