import Mustache from 'mustache';
import { LocaleType } from './../index';
import getI18n from '../utilities/getI18n';
import useLocale from './useLocale';

const useTranslation: UseTranslationType = (forcedLocale) => {
	const locales = getI18n.locales;
	const { locale: globalLocale } = useLocale();
	const isForcedLocaleNotProvided = forcedLocale && !locales[forcedLocale];
	if (isForcedLocaleNotProvided) {
		console.warn(
			`${forcedLocale} locale isn't provided in configuration file.\nSwitched to global locale instead. `,
		);
	}
	const locale = !forcedLocale || isForcedLocaleNotProvided ? globalLocale : forcedLocale;

	const t: TType = (key, view) => {
		const value = key.split('.').reduce((previous, current) => {
			return (previous && previous[current]) || null;
		}, locales[locale]);
		const translation = value || key;
		try {
			return Mustache.render(translation, view);
		} catch (e) {
			return translation;
		}
	};

	return {
		t,
	};
};

export default useTranslation;

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export type UseTranslationType = (forcedLocale?: LocaleType) => {
	t: TType;
};

type TType = (i18nKey: string, view?: Record<string | number, any>) => any;
