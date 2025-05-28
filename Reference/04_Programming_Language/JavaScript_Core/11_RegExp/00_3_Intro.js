Metacharacters are characters with a special meaning:
	.				Find a single character, except newline or line terminator
	\w				Find a word character
	\W				Find a non-word character
	\d				Find a digit
	\D				Find a non-digit character
	\s				Find a whitespace character
	\S				Find a non-whitespace character
	\b				Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
	\B				Find a match, but not at the beginning/end of a word
	\0				Find a NULL character
	\n				Find a new line character
	\f				Find a form feed character
	\r				Find a carriage return character
	\t				Find a tab character
	\v				Find a vertical tab character
	\xxx			Find the character specified by an octal number xxx
	\xdd			Find the character specified by a hexadecimal number dd
	\udddd			Find the Unicode character specified by a hexadecimal number dddd
