import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { LocaleType } from '../index';
import getI18n from '../utilities/getI18n';

let { globalLocale, localeListeners } = {
	globalLocale: getI18n?.defaultLocale,
	localeListeners: new Set<any>(),
};

const useLocale: UseLocaleType = () => {
	const [locale, setLocale] = useState<LocaleType>(globalLocale);

	useEffect(() => {
		localeListeners.add(setLocale);
		setLocale(globalLocale);
		return () => {
			localeListeners.delete(setLocale);
		};
	}, []);

	const handleSetLocale: Dispatch<SetStateAction<LocaleType>> = (newLocaleArg) => {
		const newLocale = typeof newLocaleArg === 'function' ? newLocaleArg(locale) : newLocaleArg;
		globalLocale = newLocale as LocaleType;
		localeListeners.forEach((setter) => {
			typeof setter === 'function' && setter(newLocale);
		});
	};
	return {
		locale,
		setLocale: handleSetLocale,
	};
};

export default useLocale;

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export type UseLocaleType = <Locale = LocaleType>() => {
	locale: Locale;
	setLocale: Dispatch<SetStateAction<Locale>>;
};
