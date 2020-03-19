// This is a comment

/* This is 
   a block comments */

/* 
	JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object.
	We tell JavaScript to create or declare a variable by putting the keyword var in front of it, as "var name_of_variable;"
	Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.
*/
	var x,y,z;
	
/*	
	When JavaScript variables are declared, they have an initial value of undefined.
	In JavaScript all variables and function names are case sensitive. Write variable names in Javascript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
*/
	var x = 1;
	var X = 2;
	var y = x + X;
	var camelCase;

/*	
	Math: + (plus)	- (minus)	* (multiply)	/ (devine)	% (remaider of devine)
	Quicly Increment or Decrement with ++ and --
	Compound Assignment With Augmented Addition
*/
	a++;	// equal: a = a + 1;
	a--;	// equal: a = a - 1;
	
	a += 5;	// equal: a = a + 5;
	a -= 7; // equal: a = a - 7;
	a *= 3; // equal: a = a * 3;
	a /= 9; // equal: a = a / 3;

/*
	In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
	Unlike some languages, single and double quotes are functionally identical in JavaScrip. You can add an double quotes in a single quotes without using escape (backslash)
	Table of common escape sequences:
	\'		single quote
	\"		double quote
	\\		backslash
	\n		newline
	\r		carriage return
	\t		tab
	\b		backspace
	\f		form feed
*/
	var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
	var sampleStr1 = 'Alan said, "Peter is learning JavaScript".';

/*
	In JavaScript, when the + operator is used with a String value, it is called the "CONCATENATION operator. You can build a new string out of other strings by "concatenating" them together.
*/
	var a = "This is ";
	var b = "Apple";
	var c = a + b;
	var a+= "Orange";
	var e = "Hello, " + b + ". It is me";

/*	
	You can find the length of a String value by writing .length after the string variable or string literal.
*/
	"Alan Peter".length; 	// 10
	a.length;				// 8

/*	
	Bracket notation is a way to get a character at a specific index within a string. Index starts with 0 (Zero-based indexing).
	Combine with length we can use to find the last letter of string.
*/
	var firstLetterOfFirstName = "";
	var firstName = "Ada";
	firstLetterOfFirstName = firstName[0];			// A
	
	var lastLetter = firstName[firstName.length -1];

/*
	In JavaScript, String values are immutable, which means that they cannot be altered once created as example
		var myStr = "Bob";
		myStr[0] = "J";			// Wrong and cannot be excuted
	The only way to change myStr would be to assign it with a new string:
*/
	var myStr = "Bob";
	myStr = "Job";

/*
	With JavaScript array variables, we can store several pieces of data in one place. You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:
		var sandwich = ["peanut butter", "jelly", "bread"].
	Access Array Data with Indexes: Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing.
*/
	var myArray = ["Dung", 23, "Tay Ninh"];
	
	var array = [1,2,3];
	array[0]; // equals 1
	var data = array[1];  // equals 2
	array[2] = 5;

/*
	Nest one Array within Another Array and it is called a Multi-dimensional Array
	When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
*/
	var ourArray = [["the universe", 42], ["everything", 101010]];
	var myArray = [["Dung",27],["Duong", 21]];
	var myData = myArray[1][1];		// equal 21

/*
	.push() takes one or more parameters and "pushes" them onto the end of the array.
	.pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable.
	.shift() removes the first element instead of the last. We can store this "popped off" value by assigning it to a variable.
	.unshift() works exactly like .push(), but instead of adding the element at the end of the array
	.splice(x,y) Remove y elements of an array at an index x
*/
	var arr = [1,2,3];
	
	arr.push(4);						// arr is now [1,2,3,4]
	var removeLastValue = arr.pop();	// equal 4 and arr = [1,2,3]
	var removeFirstValue = arr.shift();	// equal 1 and arr = [2,3]
	arr.unshift(10);					// arr = [10,2,3]
	arr.splice(i, 1);					// Remove an element of an array at an index i
	
/*
	Global Scope and Functions: In JavaScript, we can divide up our code into reusable parts called functions. Scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
*/
	var x = 10;		//global variable
	
	function functionName(a,b) {
		console.log("Hello World");
		console.log(a + b + x);
		z = 100;			// Variables which are used without the var keyword are automatically created in the global scope.
		var zzz = 20;		// Variables which are declared within a function, as well as the function parameters have local scope (they are only visible within that function)
	}
	
	functionName(1,2);
	console.log(z);
	
/*
	It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
	When a return statement is reached, the execution of the current function stops and control returns to the calling location.
*/
	var someVar = "Hat";
	function myFun() {
		var someVar = "Head";
		return someVar;
	}
	console.log(myFun());

/*
	Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off".
	Boolean values are never written with quotes. The strings "true" and "false" are not Boolean
	If statements are used to make decisions in code. These conditions are known as Boolean conditions because they may only be true or false.
	
	
*/
	if (condition is true) {
		statement is executed
	}
	else {
		statement is executed
	}

/*
	Comparison Operators:
		Operator							Description
		-----------------------------------------------------------------
		Equality operator		 			==			// Mean: Equal
		Strict Equality Operator			===			// strict equality tests both the data type and value of the compared elements.
		Inequality operator 				!=			// Mean: Not equal
		Strict inequality operator			!==			// means "Strictly Not Equal" and returns false where strict equality would return true
		Greater Than Operator				>		
		greater than or equal to operator	>=
		Logical And Operator				&&			// True if both condition is true
		Logical Or Operator					||			// True if one condition is true

	
	NOTE: "==", ">", ">=", "<", "<=" operators convert the data type before comparation so they can compare two different data types (for example, numbers and strings):
		1   ==  1    // true
		1   ==  2    // false
		1   == '1'   // true
		"3"  ==  3   // true
	
	However, to compare two different data types (for example, numbers and strings), it should recommend to convert one type to another.
	
	
	Condition Operator:
		Operator		Description				EX
		-----------------------------------------------------------------
		&&				AND						(x < 10 && y > 1) is true
		||				OR						(x == 5 || y == 5) is false
		!				NOT						!(x == y) is true
		
*/


/*
	If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.
*/
	if (condition is true) {
		statement is executed
	}
	else if (condition is true) {
		statement is executed
	}
	...
	else {
		statement is executed
	}
	
/*
	Selecting from many options with Switch Statements:  A switch statement tests a value and can have many case statements which defines various possible values. Case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.
	You can add the default statement which will be executed if no matching case statements are found
*/
	switch (num) {
		case value1:
			statement1;
			break;
		case value2:
			statement2;
			break;
		...
		case valueN:
			statementN;
			break;
		default:
			defaultStatement;
	}

/*
	If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:
*/
	switch(val) {
	  case 1:
	  case 2:
	  case 3:
		result = "1, 2, or 3";
		break;
	  case 4:
		result = "4 alone";
	}

/*
	Build JavaScript Objects: (dictionary in python): Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
	There are two ways to access the properties of an object: the dot operator (.) and bracket notation ([]), similar to an array.
*/
	var cat = {
	  "name": "Whiskers",
	  "legs": 4,
	  "tails": 1,
	  "enemies": ["Water", "Dogs"],
	  "space name": "catie"
	};
	
	var catName = cat.name;					// The dot operator is what you use when you know the name of the property you're trying to access ahead of time.
	var catEnemyTwo = cat["space name"]		// If the property of the object you are trying to access has a space in it, you will need to use bracket notation.
	cat.tails = 10;							// Change a property on object
	cat.love = "Me";						// Add new property to object
	delete cat.love;						// Delete a property in object
	
/*
	Testing Objects for Properties: We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
*/
	var myObj = {
	  top: "hat",
	  bottom: "pants"
	};
	myObj.hasOwnProperty("top");    // true
	myObj.hasOwnProperty("middle"); // false

/*
	Manipulating Complex Objects: is an array which contains object inside and Objects hold data in a property, which has a key-value format. 
	JavaScript Object Notation or JSON is a related data interchange format used to store data. Ex as below:
	{
	  "artist": "Daft Punk",
	  "title": "Homework",
	  "release_year": 1997,
	  "formats": [ 
		"CD",
		"Cassette",
		"LP"
	  ],
	  "gold": true
	}
*/
	var complexDataStructure =  [
		{
			"artist": "Daft Punk",
			"title": "Homework",
			"release_year": 1997,
			"formats": [ 
				"CD",
				"Cassette",
				"LP"
			],
			"gold": true
		},							// You will need to place a comma after every object in the array, unless it is the last object in the array.
		{
			"artist": "Billy Joel",
			"title": "Piano Man",
			"release_year": 1973,
			"formats": [ 
			  "CS", 
			  "8T", 
			  "LP" ],
			"gold": true
		}
	]
/*
	Accessing Nested Objects (Object in Object): The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
*/
	var ourStorage = {
		"desk": {
			"drawer": "stapler"
		},
		"cabinet": {
			"top drawer": { 
				"folder1": "a file",
				"folder2": "secrets"
			},
			"bottom drawer": "soda"
		}
	};
	ourStorage.cabinet["top drawer"].folder2;  // "secrets"
	ourStorage.desk.drawer; // "stapler"
	
	var myStorage = {
		"car": {
			"inside": {
				"glove box": "maps",
				"passenger seat": "crumbs"
			},
			"outside": {
				"trunk": "jack"
			}
		}
	};
	var gloveBoxContents = myStorage.car.inside["glove box"];

/*
	Accessing Nested Arrays (Multiple Object in Array): objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.
*/
	var ourPets = [
		{
			animalType: "cat",
			names: [
			  "Meowzer",
			  "Fluffy",
			  "Kit-Cat"
			]
		},
		{
			animalType: "dog",
			names: [
			  "Spot",
			  "Bowser",
			  "Frankie"
			]
		}
	];
	ourPets[0].names[1]; // "Fluffy"
	ourPets[1].names[0]; // "Spot"

/*
	Iterate with JavaScript For Loops: For loops are declared with three optional expressions separated by semicolons:
		for ([initialization]; [condition]; [final-expression])
		{
			executing statement when condition is true;
		}
*/
	var ourArray = [];
	for (var i = 0; i < 5; i++) {
		ourArray.push(i);	
	}	
	console.log(ourArray);			// ourArray will now contain [0,1,2,3,4].

/*
	Nesting For Loops: If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays
*/
	var arr = [
	  [1,2], [3,4], [5,6]
	];
	for (var i=0; i < arr.length; i++) {
	  for (var j=0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	  }
}

/*
	Iterate with JavaScript While Loops: runs "while" a specified condition is true and stops once that condition is no longer true.
*/
	var ourArray = [];
	var i = 0;
	while(i < 5) {
		  ourArray.push(i);
		  i++;
	}

/*
	Generate Random Fractions with JavaScript: JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1
*/
	
	function randomFraction() {
		return Math.random();
	}
	
/*
	Sift through Text with Regular Expressions: Regular expressions are used to find certain words or patterns inside of strings.
	For example, if we wanted to find the word the in the string The dog chased the cat, we could use the following regular expression: /the/gi
	Let's break this down a bit:
		/ is the start of the regular expression.
		the is the pattern we want to match.
		/ is the end of the regular expression.
		g means global, which causes the pattern to return all matches in the string, not just the first one.
		i means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.
*/
	var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
	var expressionToGetSoftware = /software/gi;
	var softwareCount = testString.match(expressionToGetSoftware).length;		// 1
	
/*
	Find Numbers with Regular Expressions: 
	We can use special selectors in Regular Expressions to select a particular type of value.
	One such selector is the digit selector \d which is used to retrieve one digit (e.g. numbers 0 to 9) in a string.
	In JavaScript, it is used like this: /\d/g.
	Appending a plus sign (+) after the selector, e.g. /\d+/g, allows this regular expression to match one or more digits.
	The trailing g is short for 'global', which allows this regular expression to find all matches rather than stop at the first match.
*/
	var testString = "There are 3 cats but 4 dogs.";
	var expression = /\d+/g; 
	// This code counts the matches of expression in testString
	var digitCount = testString.match(expression).length;	// 2 since there are 2 numbers


/*
	Find Whitespace with Regular Expressions: 
	We can also use regular expression selectors like \s to find whitespace in a string.
	The whitespace characters are " " (space), \r (the carriage return), \n (newline), \t (tab), and \f (the form feed).
*/
	var testString = "How many spaces are there in this sentence?";
	var expression = /\s+/g;
	var spaceCount = testString.match(expression).length;

/*
	Invert Regular Expression Matches with JavaScript:
	You can invert any match by using the uppercase version of the regular expression selector.
	For example, \s will match any whitespace, and \S will match anything that isn't whitespace.
*/
	var testString = "How many spaces are there in this sentence?";
	var expression = /\S/g;
	var spaceCount = testString.match(expression).length;


/*
	
*/