// Example 1
// Format a number into a string, using locale settings:
let num_1 = 1000000;
let result_1 = num_1.toLocaleString();
console.log(result_1);
//: 1,000,000

// Example 2
// Format a number into a string, using the locale specific of FINLAND:
let num_2 = 1000000;
let result_2 = num_2.toLocaleString("fi-FI");
console.log(result_2);
//: 1 000 000

// Example 3
// Format a number into a currency string, using the locale specific of USA:
let num_3 = 1000000;
let result_3 = num_3.toLocaleString("en-US", {style:"currency", currency:"USD"});
console.log(result_3);
//: $1,000,000.00

// Description:
// The toLocaleString() returns a number as a string, using local language format.
// The language format depends on the locale setup on your computer.

// Syntax:
// number.toLocaleString(locales, options)

// Parameters:
// locales // Optional.
	// The language specific format to use.
	// Click on the "Try it" button to see all values in action.
// ar-SA Arabic (Saudi Arabia)
// bn-BD Bangla (Bangladesh)
// bn-IN Bangla (India)
// cs-CZ Czech (Czech Republic)
// da-DK Danish (Denmark)
// de-AT Austrian German
// de-CH "Swiss" German
// de-DE Standard German (as spoken in Germany)
// el-GR Modern Greek
// en-AU Australian English
// en-CA Canadian English
// en-GB British English
// en-IE Irish English
// en-IN Indian English
// en-NZ New Zealand English
// en-US US English
// en-ZA English (South Africa)
// es-AR Argentine Spanish
// es-CL Chilean Spanish
// es-CO Colombian Spanish
// es-ES Castilian Spanish (as spoken in Central-Northern Spain)
// es-MX Mexican Spanish
// es-US American Spanish
// fi-FI Finnish (Finland)
// fr-BE Belgian French
// fr-CA Canadian French
// fr-CH "Swiss" French
// fr-FR Standard French (especially in France)
// he-IL Hebrew (Israel)
// hi-IN Hindi (India)
// hu-HU Hungarian (Hungary)
// id-ID Indonesian (Indonesia)
// it-CH "Swiss" Italian
// it-IT Standard Italian (as spoken in Italy)
// ja-JP Japanese (Japan)
// ko-KR Korean (Republic of Korea)
// nl-BE Belgian Dutch
// nl-NL Standard Dutch (as spoken in The Netherlands)
// no-NO Norwegian (Norway)
// pl-PL Polish (Poland)
// pt-BR Brazilian Portuguese
// pt-PT European Portuguese (as written and spoken in Portugal)
// ro-RO Romanian (Romania)
// ru-RU Russian (Russian Federation)
// sk-SK Slovak (Slovakia)
// sv-SE Swedish (Sweden)
// ta-IN Indian Tamil
// ta-LK Sri Lankan Tamil
// th-TH Thai (Thailand)
// tr-TR Turkish (Turkey)
// zh-CN Mainland China, simplified characters
// zh-HK Hong Kong, traditional characters
// zh-TW Taiwan, traditional characters

// options 	Optional.  An object with formatting options:
	// currency 	
		// Legal values: any currency code (like "EUR", "USD", "INR", etc.)
	// currencyDisplay
		// Legal values:
		// "symbol" (default)
		// "code"
		// "name"
	// localeMatcher
		// Legal values:
		// "best-fit" (default)
		// "lookup"
	// maximumFractionDigits
		// A number from 0 to 20 (default is 3)
	// maximumSignificantDigits
		// A number from 1 to 21 (default is 21)
	// minimumFractionDigits
		// A number from 0 to 20 (default is 3)
	// minimumIntegerDigits
		// A number from 1 to 21 (default is 1)
	// minimumSignificantDigits
		// A number from 1 to 21 (default is 21)
	// style
		// Legal values:
		// "currency"
		// "decimal" (default)
		// "percent"
	// useGrouping
		// Legal values:
		// "true" (default)
		// "false"

// Return:
// A string	A string representing a number the local format.

// More Examples
	// Use the options parameter (object) for currency formatting:
	// let num = new Number(1000000);
	// const myObj = {
	  // style: "currency",
	  // currency: "EUR"
	// }

	// let text = num.toLocaleString("en-GB", myObj);
	// let num = new Number(1000000);
	// let text = num.toLocaleString("en-GB", {style:"currency", currency:"EUR"});

	// Using the locale specific of JAPAN:
	// let num = 1000000;
	// let text = num.toLocaleString("ja-JP", {style:"currency", currency:"JPY"});




// History:
// toLocaleString() is an ECMAScript3 (ES3) feature.
// ES3 (JavaScript 1999) is fully supported in all browsers
