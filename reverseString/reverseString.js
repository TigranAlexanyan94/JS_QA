function reverseString(str) {
  if(str.length == 0 ) return '';
  return reverseString(str.substr(1)) + str[0];
}

document.write(reverseString(prompt("Enter string")));
