// Get a date as string, using locale conventions:
let d = new Date();
let text = d.toLocaleString();
console.log('text', text);
//: 10/19/2024, 9:44:29 PM

// Description:
// The toLocaleString() method returns a Date object as a string, using locale settings.
// The default language depends on the locale setup on your computer.

// Syntax:
// Date.toLocaleString(locales, options)

// Parameter Values:
// locales
	// Optional. Which language specific format to use.
	// Click on the "Try it" button to see all values in action.
	// Legal Values:
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
// fa-IR Iranian (Iran)
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

// options 	Optional. An object where you can set some properties.  // Legal properties:
// dateStyle 	Legal values:
				// "full"
				// "long"
				// "medium"
				// "short"
// timeStyle 	"full"
				// "long"
				// "medium"
				// "short"
// localeMatcher
				// "best-fit" (default)
				// "lookup"
// timeZone 	 
// hour12 	false
				// true
// hourCycle 	"h11"
			// "h12"
			// "h23"
			// "h24"
// formatMatcher
			// "basic"
			// "best-fit" (default)
// weekday 	"long"
			// "short"
			// "narrow"
// year 	"2-digit"
			// "numeric"
// month 	"2-digit"
			// "long"
			// "narrow"
			// "numeric"
			// "short"
// day 	"2-digit"
			// "numeric"
// hour 	"2-digit"
			// "numeric"
// minute 	"2-digit"
			// "numeric"
// second 	"2-digit"
			// "numeric"
// timeZoneName 	"long"
			// "short"

// Technical Details:
// Return Value: 	A String, representing the date and time as a string
// JavaScript Version: 	ECMAScript 1

// History:
// toLocaleString() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
