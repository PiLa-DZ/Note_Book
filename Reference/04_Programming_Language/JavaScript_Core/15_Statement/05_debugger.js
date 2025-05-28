<!DOCTYPE html>
<heml>
<body>
	<script>
		// With the debugger turned on, this code should stop executing before the third line:
		let x = 15 * 5;
		debugger;
		document.getElementbyId("demo").innerHTML = x; 

		/* Note: --> -----------------------------------------------

				to run debugger in browser

			1 --> Run your code with browser.
			2 --> Open developer tools. 
			3 --> Refresh page 

		--------------------------------------------------------- */

		// Description:
			// The debugger statement stops the execution of JavaScript, and calls the debugger.

		/* Note: ---------------------------------------------------

			If no debugging is available, the debugger statement has no effect.

			Read our JavaScript Debugging Tutorial for more information about how to activate debugging if your browser.

			Normally, you activate debugging in your browser with the F12 key, and select "Console" in the debugger menu.

		--------------------------------------------------------- */

		// Syntax:
			// debugger;

		// History:
		// debugger is an ECMAScript1 (ES1) feature.
		// ES1 (JavaScript 1997) is fully supported in all browsers:
	</script>
</body>
</html>
