var randList1 = [
	"t",
	"y",
	"u"
];

var randList2 = [
	"i",
	"o",
	"p"
];

var randList3 = [
	"2",
	"xxx",
	"xxx"
];

var randList4 = [
	"xxx",
	"xxx",
	"xxx"
];

var randList5 = [
	"xxx",
	"xxx",
	"xxx"
];

var randList6 = [
	"xxx",
	"xxx",
	"xxx"
];

var randList7 = [
	"xxx",
	"xxx",
	"xxx"
];


// When button pressed, do this:

function generateRandom() {
	var random1 = randList1[Math.floor(Math.random()*randList1.length)];
	var random2 = randList2[Math.floor(Math.random()*randList2.length)];
	var random3 = randList3[Math.floor(Math.random()*randList3.length)];
	var random4 = randList4[Math.floor(Math.random()*randList4.length)];
	var random5 = randList5[Math.floor(Math.random()*randList5.length)];
	var random6 = randList6[Math.floor(Math.random()*randList6.length)];
	var random7 = randList7[Math.floor(Math.random()*randList7.length)];


	// SET WORDS
	$( ".field1" ).html(random1);
	$( ".field2" ).html(random2);
	$( ".field3" ).html(random3);
	$( ".field4" ).html(random4);
	$( ".field5" ).html(random5);
	$( ".field6" ).html(random6);
	$( ".field7" ).html(random7);
}