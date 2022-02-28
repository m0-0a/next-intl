export { default as useLocale } from './hooks/useLocale';
export * from './hooks/useLocale';
export { default as useTranslation } from './hooks/useTranslation';
export * from './hooks/useTranslation';
export { default as Trans } from './components/Trans';
export * from './components/Trans';

export type I18nConfigType = {
	locales: Record<LocaleType, any>;
	defaultLocale: string;
};

export type LocaleType = NextIntlTypes extends { LocaleType: unknown }
	? NextIntlTypes['LocaleType']
	: string;

export interface NextIntlTypes {}
