import React from 'react';
import useTranslation from '../hooks/useTranslation';
import { LocaleType } from '../index';

const Trans = ({ i18nKey, view, forcedLocale }: TranslationPropsType) => {
	const { t } = useTranslation(forcedLocale);
	return <>{t(i18nKey, view)}</>;
};

export default Trans;

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
export type TranslationPropsType = {
	i18nKey: string;
	view?: Record<string | number, any>;
	forcedLocale?: LocaleType;
};
