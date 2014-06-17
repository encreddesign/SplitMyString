SplitMyString
=============

SplitMyString is a small byte size lib, it alows you to pass a simple string and push it to an array or parse it as json

Use the SMS function to pass string to split

//set array to push to
var splarray = [];

//call sms function to pass string to
var sms = new SMS("Hello World", splarray);

//call split function
sms.split();

//the following output would be the result
["Hello", "World"]
