/*
	Reverse a String
*/
	function reverseString(str) {
		return str.split('').reverse().join('');
	}
	reverseString("hello");

	
/*
	Factorialize a Number: 
*/
	function factorialize(num) {
		var result = 1;
		for (var i=1; i<=num ; i++){
			result *= i;
		}
		return result;
	}
	factorialize(5);

/*
	Check for Palindromes
*/
Solution 1:
	function palindrome(str) {
		var lowerAndRemove = str.toLowerCase().replace(/[^a-z0-9]/g,'');	// only select a to z or 0 to 9 character, others are removed
		var splitStr = lowerAndRemove.split('');							// change to array 
		var loop = Math.floor(lowerAndRemove.length/2);
		for (var i=0 ; i<loop ; i++) {
			if (splitStr[i] != splitStr[lowerAndRemove.length-(i+1)]) {
			return false;
			}
		}
		return true;
	}
	palindrome(" eye for of 1 eye.");
	
Solution 2:
	function palindrome(str) {
		var originStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');			// only select a to z or 0 to 9 character, others are removed
		var reverseStr = originStr.split('').reverse().join('');			// reverse the text
		if (originStr == reverseStr) {
			return true;
		}
		return false;
	}

/*
	Find the Longest Word in a String
*/
	function findLongestWord(str) {
		var splitStr = str.split(" ");
		var max = splitStr[0].length;
		for (var i=1 ; i<splitStr.length ; i++) {
			if (splitStr[i].length > max ){
				max = splitStr[i].length; 
			}
		}
		return max;
	}
	findLongestWord("The quick brown fox jumped over the lazy dog");

/*
	Title Case a Sentence
*/
	function titleCase(str) {
	  var words = str.toLowerCase().split(' ');
	  for (var i=0 ; i<words.length ; i++) {
		var chars = words[i].split('');
		chars[0] = chars[0].toUpperCase();
		words[i] = chars.join('');
	  }
	  
	  return words.join(' ');
	}

	titleCase("I'm a little tea pot");

	
/*
	Return Largest Numbers in Arrays
*/
	function largestOfFour(arr) {
	  var maxArr = [];
	  for (var i=0 ; i<arr.length ; i++) {
		maxArr[i] = 0;
		for (var j=0 ; j<arr[i].length ; j++) {
		  if (maxArr[i] < arr[i][j]) {
			maxArr[i] = arr[i][j];
		  }
		}
	  }
	  // You can do this!
	  return maxArr;
	}

	largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*
	Confirm the Ending
*/
	function confirmEnding(str, target) {
	  var compair = str.substring(str.length - target.length)
	  if (target == compair) {
		  return true;
		}
	  return false;
	}

	confirmEnding("Bastian nan", "aaan");

	
/*
	Repeat a string repeat a string
*/
	function repeatStringNumTimes(str, num) {
	  // repeat after me
	  if (num<1) {
		return '';
	  }
	  else {
		return str.repeat(num);
	  }
	}

	repeatStringNumTimes("abc", 3);


/*
	Truncate a string Incomplete
*/
	function truncateString(str, num) {
	  // Clear out that junk in your trunk
	  
	  if (str.length > num ) {
		if (num > 3 ){
		   return str.slice(0,num-3) + '...';
		}
		else {
		  return str.slice(0,num) + '...'; 
		}
	  }
	  else {
		return str;  
	  }
	}

	truncateString("Absolutely Longer", 2);


/*
	Chunky Monkey
*/
	function chunkArrayInGroups(arr, size) {
	  // Break it up.
	  var newArr = [];
	  while (arr.length > size) {
		newArr.push(arr.slice(0,size));
		arr = arr.slice(size);
	  }
	  newArr.push(arr);
	  return newArr;
	}

	chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);


/*
	Slasher Flick
*/
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);


/*
	Mutations
*/
	function mutation(arr) {
	  arr[0] = arr[0].toLowerCase();
	  var chars = arr[1].toLowerCase().split('');
	  for (var i=0 ; i< chars.length; i++){
		if (arr[0].indexOf(chars[i]) == -1) {
		  return false;
		}
	  }
	  return true;
	}

	mutation(["Mary", "Army"]);

	
/*
	Falsy Bouncer Incomplete
*/
	function bouncer(arr) {
	  // Don't show a false ID to this bouncer.
	  return arr.filter(Boolean);
	}

	bouncer([7, "ate", "", false, 9]);


/*
	Seek and Destroy
*/
	function destroyer(arr) {
	  for (var i=1 ; i< arguments.length ; i++){
		while (arr.indexOf(arguments[i]) !== -1) {
		  arr.splice(arr.indexOf(arguments[i]),1);
		}
	  }
	  return arr;
	}

	destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
	Where do I belong
*/
	function getIndexToIns(arr, num) {
	  arr.sort(function(a,b){return a-b;});
	  for (var i=0; i<arr.length; i++) {
		if (arr[i] >= num) {
		  return i;
		}
	  }
	  return arr.length;
	}

	getIndexToIns([10, 20, 30, 40, 50], 35);  


/*
	Caesars Cipher Incomplete
*/
function rot13(str) {
  //var a = 'N'.charCodeAt(0) -13;
  //return String.fromCharCode(a);
  //return 'A'.charCodeAt(0);        
  var words = str.split(' ');
  for (var i=0; i<words.length; i++) {
    var codes = [];
    for (var j=0; j<words[i].length; j++){
      if (words[i].charCodeAt(j) >= 78){
        codes[j] = String.fromCharCode(words[i].charCodeAt(j)-13);  
      }
      else if (words[i].charCodeAt(j)>64) {
        codes[j] = String.fromCharCode(words[i].charCodeAt(j)+13);
      }
      else {
        codes[j] = String.fromCharCode(words[i].charCodeAt(j));
      }
    }
    words[i] = codes.join('');
    
  }
  return words.join(' ');
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");


