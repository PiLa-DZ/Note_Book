Error Object Properties:
	Name and Message	Return error name and message
	name				Sets or returns an error name
	message				Sets or returns an error message (a string)

Error Names:
	EvalError			Deprecated - use SyntaxError instead	 
	RangeError			A number "out of range" has occurred	
	ReferenceError		An illegal reference has occurred	
	SyntaxError			A syntax error has occurred	
	TypeError			A type error has occurred	
	URIError			An error in encodeURI() has occurred	

Non-Standard Properties and Methods:
Do not use these properties and methods in public web sites. They will not work in all browsers.
	arguments			Deprecated
	caller				Deprecated
	columnNumber		Firefox only
	description			Microsoft only
	displayName			Firefox only
	fileName			Firefox only
	lineNumber			Firefox only
	number				Microsoft only
	stack				Firefox only
	Methods				Description
	evalError()			Deprecated
	internalError()		Firefox only
	toSource()			Non Standard
