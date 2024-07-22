interface I18nConfig {
    locales: string[];
    defaultLocale: string;
}

const i18nConfig: I18nConfig = {
    defaultLocale: "en",
    locales: ["en", "es"]
};

export default i18nConfig;
