// creating the function SILLY which takes some "module"
var SILLY = (function(module) {

	/* 
		we send this "module" to the "DoIt" function and that will be a function
	 	which takes in a "resultObject" 
	 */
	module.DoIt = function(resultObject) {

		/* 
			using the "prepend" function from zepto we pass in a zepto object in our
			"SILLY.DoIt()" function in index.html (which could be a jquery object).
			We'll prepend a Date on it and, to keep our new line, break off to putting that Date in.
		*/
		resultObject.prepend(Date() + '<br/>');
	}

	// we return "module" so that it's identified.
	return module;
} 

/* 
	The function will invoke with either SILLY itself or if it's null we give it a 
	new object that it can use. That then ends this function.
*/
(SILLY || {}));