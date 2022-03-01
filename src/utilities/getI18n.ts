import { I18nConfigType } from './../index';

const getI18n: GetI18nType = () => {
	try {
		let userI18n: I18nConfigType;
		try {
			userI18n = require('./../../../../i18n');
		} catch (error) {
			try {
				userI18n = require('/i18n');
			} catch (error) {
				throw new Error(
					'Missing @m0-0a/next-intl configuration file.\n Please read docs: https://www.npmjs.com/package/@m0-0a/next-intl ',
				);
			}
		}
		if (Object.keys(userI18n.locales).length < 1) {
			throw new Error(`Missing locales. Did you import and add the locales in 'i18n/index.js'?`);
		}
		if (userI18n.defaultLocale.length === 0) {
			throw new Error(`Missing default locale. Did you set 'defaultLocale' in 'i18n/index.js'?`);
		}
		if (!userI18n.locales[userI18n.defaultLocale]) {
			throw new Error(
				`Invalid default locale '${userI18n.defaultLocale}'. Check your 'defaultLocale' in 'i18n/index.js'?`,
			);
		}
		return userI18n;
	} catch (error) {
		return;
	}
};

export default getI18n();

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

type GetI18nType = () => I18nConfigType;
