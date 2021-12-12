var randList1 = [
	"Brent",
	"Chelsea",
	"Lauren",
	"Meg",
	"Chris",
	"Andy",
	"Nadja",
	"Will",
	"Nick",
	"Sophia",
	"Mike",
	"Marcus",
	"Ben",
	"Charlotte",
	"Max",
	"Lexi",
	"Emily",
	"Caroline"
];

var randList2 = [
	"the ex-teacher",
	"the business graduate",
	"the snitch",
	"the class traitor",
	"the funny guy",
	"the one who loves mindfulness",
	"the high school bully",
	"the absent type",
	"the hype guy",
	"the cool one",
	"the down to earth listener",
	"the mum friend",
	"the wine enthusiast",
	"the one who's always travelling",
	"the liar",
	"the one who also hates the system"
	"the disability advocate"
];

var randList3 = [
	"hates you",
	"good at finding jobs you are overqualified for",
	"good at finding jobs you are underqualified for",
	"sounds very far away during phone calls",
	"still mispronounces your name",
	"still can't remember your pronouns",
	"laughs at your jokes",
	"gossips about you to coworkers",
	"thinks you'll be alright",
	"ends appointments early",
	"never ends appointments early",
	"regularly ghosts you",
	"makes your job plan a bit worse each time",
	"heckling you for pay slips",
	"pretending to care",
	"outing you to future employers",
	"has never sent you a job or training opportunity",
	"takes credit for your successful job hunting"

];

var randList4 = [
	"whack",
	"totally off",
	"just not very nice",
	"maybe hates you",
	"nice but not sincere",
	"this job is just a stepping stone for them",
	"thinks they don't have any disabled friends",
	"totally jaded",
	"wishes they were doing anything else",
	"bisexual but you still don't like them",
	"funny but you can never be friends",
	"somehow you pity this one",
	"lawful evil",
	"seems good with kids and no one else",
	"probably has 100000 linkedin connections",
	"used to be cool"
];

var randList5 = [
	"Bouldering",
	"Going out on Smith Street",
	"Watching the tennis",
	"Rug-tufting",

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