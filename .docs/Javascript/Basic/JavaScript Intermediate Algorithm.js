/*
	Sum All Numbers in a Range
*/
	function sumAll(arr) {
		var maxNum = Math.max.apply(null, arr);
		var minNum = Math.min.apply(null, arr);
		var sum = 0;
		for (var i = minNum; i<= maxNum ; i++) {
			sum += i;
		}
		return sum;
	}

sumAll([1, 4]);

	
/*
	Diff Two Arrays 
*/
	function diffArray(arr1, arr2) {
		var newArr = [];
		// Same, same; but different.
		var mergeArr = arr1.concat(arr2);
		var seen = {};
		var len = mergeArr.length;
		for(var i = 0; i < len; i++) {
			var item = mergeArr[i];
			if(seen[item] != 1) {
				if (seen[item] > 1 ) {
					//do nothing
				}
				else {
					seen[item] = 1;
					newArr.push(item);  
				}
			}
			else if (seen[item] == 1) {
			  var idx = newArr.indexOf(item);
			  newArr.splice(idx,1);
			  seen[item] = 2;
			}
		}
		return newArr;
	}
diffArray([1, 2, 3, 5, 1, 2], [1, 2, 3, 4, 5,1,2]);

	
/*
	Roman Numeral Converter
*/
	function convertToRoman(num) {
		var roman = {0:"", 1:"I",2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX" };
		var romanTen = {0:"", 1:"X",2:"XX", 3:"XXX", 4:"XL", 5:"L", 6:"LX", 7:"LXX", 8:"LXXX", 9:"XC" };
		var romanHundred = {0:"", 1:"C",2:"CC", 3:"CCC", 4:"CD", 5:"D", 6:"DC", 7:"DCC", 8:"DCCC", 9:"CM" };
  
		var chars = num.toString().split("");
		switch (chars.length) {
			case 1:
				return roman[chars[0]];
			case 2:
				return romanTen[chars[0]] + roman[chars[1]];
			case 3:
				return romanHundred[chars[0]] + romanTen[chars[1]] + roman[chars[2]];
			case 4:
				return "M".repeat(chars[0]) + romanHundred[chars[1]] + romanTen[chars[2]] + roman[chars[3]];
        }
	}
convertToRoman(1000);


/*
	Wherefore art thou
*/
	function whatIsInAName(collection, source) {
		// What's in a name?
		var arr = [];
		// Only change code below this line
		var searchKey = Object.keys(source);
  
		return collection.filter(function (data){
			for (var i=0; i<searchKey.length; i++){
				if(!data.hasOwnProperty(searchKey[i])){
					return false;
				}
				else {
					if(data[searchKey[i]] !== source[searchKey[i]]){
						return false;
					}
				}
			}
		return true;
		});
	}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });	


/*
	Search and Replace
*/
	function myReplace(str, before, after) {
		var chars = str.split(' ');
		for (var i=0; i< chars.length; i++){
			if (chars[i] == before){
				if(before[0].toUpperCase() == before[0]){
					var split = after.split('');
					split[0] = split[0].toUpperCase();
					chars[i] = split.join('');
				}
				else{
					chars[i] = after;
				}
			}
		}
	return chars.join(' ');
	}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

	
/*
	Pig Latin
*/
	function translatePigLatin(str) {
		if (/[ueoai]/.test(str[0])){
			return str + "way";
		}
		else {
			for (var i=0; i< str.length; i++){
				if (/[ueoai]/.test(str[i])){
					var firstChar = str.substr(0,i);
					var splitStr = str.substr(i);
					break;
				}
			}
			return splitStr + firstChar + "ay";
		}
	}

translatePigLatin("Consonant");


/*
	DNA Pairing
*/
	function pairElement(str) {
		var newArr = [];
		var splitStr = str.split('');
		for (var i=0; i< splitStr.length; i++){
			switch (splitStr[i]){
				case "A":
					newArr.push(["A", "T"]);
					break;
				case "T":
					newArr.push(["T", "A"]);
					break;
				case "G":
					newArr.push(["G", "C"]);
					break;
				case "C":
					newArr.push(["C", "G"]);
					break;
			}
		}
		return newArr;
	}

pairElement("GCG");

	
/*
	Missing letters
*/
function fearNotLetter(str) {
  var chars = str.split('');
  var firstCharNum = chars[0].charCodeAt();
  var lastCharNum = chars[chars.length-1].charCodeAt();
  var charNum = [];
  for (var i= firstCharNum; i<= lastCharNum; i++){
    charNum.push(String.fromCharCode(i));
  }
  if (chars.length == charNum.length){
    return undefined;
  }
  else{
    for (var j=0; j< charNum.length; j++){
      if (charNum[j] != chars[j]){
        return charNum[j];
      }
    } 
  }
}

fearNotLetter("abce");	


/*
	Boo who
*/
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof bool === 'boolean'){
    return true;
  }
  else {
    return false;
  }
}

booWho(true);	


/*
	Sorted Union: Remove duplication but keep the original number
*/
function uniteUnique(arr) {
  // Change all arguments to contain in an array
  var argvToArray = Array.from(arguments);
  // Merge all arrays in to 1 array
  var flattenArr = argvToArray.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),[] 
  );
  // developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // The Set object lets you store unique values of any type but keep th old order
  return Array.from(new Set(flattenArr));
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);	


/*
	Convert HTML Entities
*/
function convertHTML(str) {
  var regex = /[&<>"']/g;
  
  return test = str.replace(regex, function (x){
    switch (x) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case '\'':
        return '&apos;';
    } 
  });
}

convertHTML("<>");



/*
	Spinal Tap Case
*/
function spinalCase(str) {
  // Add a Space in between if a lowerCase is next an upperCase then change all to lowercase
  var temp =  str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  // Split string to array when there are space or underscored. Regex can also be /[_\s]/
  var splitTemp = temp.split(/\s|_/);
  // Join array to string again with dash in between
  return splitTemp.join('-');
  
}

spinalCase('AllThe-small Things');	


	
/*
	Sum All Odd Fibonacci Numbers
*/
function sumFibs(num) {
  var preNum = 1;
  var curNum = 1;
  var total = 1;
  while (curNum <= num){
    if (curNum % 2 != 0){
      total += curNum;
    }
    var temp = curNum;
    curNum += preNum;
    preNum = temp;
  }
  return total;
}

sumFibs(75025);	


/*
	Sum All Primes
*/
function isPrime(num){
  if (num == 1) {
		// 1 is not a prime number so sum is 0
		return false;
	}
	else if (num > 1){
		for (var i= 2; i<num; i++) {  
			if (num % i == 0){
				return false;
			}
	    }	
      return true;
    }
}

function sumPrimes(num) {
  var total = 0;
  for (var i = 2 ; i <= num ; i++){
    if (isPrime(i)){
      total += i;
    }
  }
  return total;
}

sumPrimes(10);



/*
	Smallest Common Multiple
*/
	// For 2 digits
	function smallestCommonFor2 (num1, num2) {
		if (num1 > num2) {
			var temp = num1 ;
			while (num1 % num2 !== 0){
			num1 += temp;
			}
			return num1;
		}
		else {
			var temp = num2 ;
			while (num2 % num1 !== 0){
			num2 += temp;
			}
			return num2;
		}
	
	}
	
	// For range digit in arr: Solution 1 - 2 function
	function continueLoop(num, max, min){
		for (var i = min ; i< max; i++){
			if (num % i != 0){
				//Continue loop
				return true;
			}
		}
		//Stop the loop
		return false;
	}
	function smallestCommons(arr) {
		var maxNum = Math.max.apply(null, arr);
		var minNum = Math.min.apply(null, arr); 
		var result = maxNum ;
		while (continueLoop(result, maxNum, minNum)){
			result += maxNum;
		}
		return result;
	}

	

/*
	Finders Keepers
*/
function findElement(arr, func) {
  for (var i=0; i< arr.length; i++){
    if (func(arr[i])){
      return arr[i];
    }
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


/*
	Drop it
*/
function dropElements(arr, func) {
  // Drop them elements.
  for (var i=0; i< arr.length; i++){
    if (func(arr[i])){
      return arr.slice(i);
    }
  }
  return [];
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});



/*
	Steamroller
*/
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  
  // This function is only called after below this creation
  var flatArr = function(arg){
    if (!Array.isArray(arg)){
      newArr.push(arg);
    }
    else{
      for (var a in arg){
        flatArr(arg[a]);
      }
    }
  };
  
  arr.forEach(flatArr);
  return newArr;
  
  //Function hoisted can be called any where
  function flatArray (arg) { }
}

steamrollArray([1, [2], [3, [[4]]]]);


/*
	Binary Agents
*/
function binaryAgent(str) {
  var newStr = [];
  // Split string to Array
  var splitStr = str.split(' ');
  // Loop throught
  for (var i in splitStr){
    var binaryToDecimal = parseInt(splitStr[i],2);
    var decimalToString = String.fromCharCode(binaryToDecimal);
    newStr.push(decimalToString);
  }
  return newStr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*
	Everything Be True
*/
//Solution 1
function truthCheck(collection, pre) {
  for (var i in collection) {
    var data = collection[i];
    var value = collection[i][pre];
    
    if (data.hasOwnProperty(pre)) {
        if (value === undefined || value === null || value === '' || Number.isNaN(value) || value < 1){
          return false;
        }
    }
    else{
      return false;
    }
  }
  return true;
}
truthCheck([{"single": "double"}, {"single": NaN}], "single");



//Solution 2
function truthCheck(collection, pre) {
  return collection.every(function (element) {
	  // Boolean(element[pre]) means that: if the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the boolean of that object has value of false
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}



/*
	Arguments Optional
*/
// Stupid Solution
function addTogether() {
  //return Number.isInteger(arguments[1]);
  if (arguments.length > 1 ){
      if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])){
        return arguments[0] + arguments[1];
      }
    else {
      return undefined;
    }
  }
  else if (arguments.length === 1){
    var firstArgv = arguments[0];
    if (Number.isInteger(firstArgv)){
	// This is closure function 
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
      return function (y) {
        if (Number.isInteger(y)){
        return firstArgv + y;
        }
        else {
          return undefined;
        }
      }; 
    }
    else{
      return undefined;
    }
    
  }
  else {
    return "We need at least 1 agrv here guys";
  }
}

addTogether(2, 3);
