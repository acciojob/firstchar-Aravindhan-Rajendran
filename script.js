function firstChar(text) {
  // your code here
	 let res=text.trim();
	return res.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
