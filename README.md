## @m0-0a/next-intl

### > Installation:

```sh
npm i @m0-0a/next-intl
```

### > Implementation:

You have to create i18n folder in root folder of the project and an index.js file inside it.
Locales "translations" files should be exported as will as default locale property as following:

```javascript
/** i18n/index.js **/

//Load locales files
const en = require('./en/common.json');
const sv = require('./sv/common.json');

const i18n = {
	locales: {
		en,
		sv,
	},
	defaultLocale: 'en',
};

module.exports = i18n;
```

**Example of locale files:**

**- i18n/en.json**

```json
{
	"helloWorldKey": "Hello World!"
}
```

**- i18n/sv.json**

```json
{
	"helloWorldKey": "Hej världen!"
}
```

### > Usage:

**# Hooks**

**1- useTranslation:**

This hook can be used to get translation in react components:

**Example:**

```javascript
/* pages/index.tsx*/
import { useTranslation } from '@m0-0a/next-intl';

export default () => {
	const { t } = useTranslation();
	return (
		<div>
			<h3>{t('helloWorldKey')}</h3>
			<h6>Welcome to @m0-0a/next-intl</h6>
		</div>
	);
};
```

**2- useLocale:**

This hook can be used to get current active locale and switch it to another one.

**Example:**

```javascript
import { useLocale } from '@m0-0a/next-intl';

export default () => {
	const { locale, setLocale } = useLocale();
	return (
		<div>
			<h3>{locale}</h3>
			<button onClick={() => setLocale('en')}>en</button>
			<button onClick={() => setLocale('sv')}>sv</button>
		</div>
	);
};
```

**# Components**

**1- Trans:**

This component can be used to get translation:

**Example:**

```javascript
/* pages/index.tsx*/
import { Trans } from '@m0-0a/next-intl';

export default () => {
	return (
		<div>
			<h3>
				<Trans i18nKey='helloWorldKey' />
			</h3>
			<h6>Welcome to @m0-0a/next-intl</h6>
		</div>
	);
};
```
