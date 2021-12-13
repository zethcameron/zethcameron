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
	"the active listener",
	"the one from marketing",
	"the nice lady",
	"the rat bastard",
	"the busy mum",
	"the loose canon",
	"on thin ice",
	"the snitch",
	"the class traitor",
	"a real hoot",
	"the funny guy",
	"your job cheerleader!",
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
	"the one who also hates the system",
	"the disability advocate"
];

var randList3 = [
	"hates you",
	"thinks you're quirky",
	"good at finding jobs you are overqualified for",
	"good at finding jobs you are underqualified for",
	"regularly emailing you dozens of jobs you can't do",
	"never remembering your career goals",
	"sounding like they're listening when they're not",
	"toxic positivity",
	"thinks capatilism is good actually",
	"looks great for their age",
	"ignoring your emails",
	"usually treats you with respect",
	"doesn't deadname you",
	"telling you all about their week",
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
	"thinks they can improve the system from within",
	"maybe hates you",
	"nice but not sincere",
	"this job is just a stepping stone for them",
	"thinks they don't have any disabled friends",
	"totally jaded",
	"totally jaded",
	"wishes they were doing anything else",
	"bisexual but you still don't like them",
	"funny but you can never be friends",
	"somehow you pity this one",
	"somehow you pity this one",
	"lawful evil",
	"seems good with kids and no one else",
	"probably has 100000 linkedin connections",
	"used to be cool",
	"occasionally helpful",
	"has your best interests at heart",
	"would like to help you but is ill-equipped to do so",
	"you forget they exist until they call each fortnight",
	"probably into astrology",
	"bit of a snob",
	"I wouldn't talk to this person in a bar",
	"maybe you have some mutual friends????",
	"They are laughing with you but also at you",
	"very, very tired",
	"exhausted",
	"vacant",
	"emotionally withdrawn",
	"coldly professional",
	"persistent",
	"not good",
	"just okay",
	"not THAT bad",
	"could be a lot worse",
	"they're kinda cool! But this arrangement still sucks"

];

var randList5 = [
	"bouldering",
	"going out on Smith Street",
	"watching the tennis",
	"rug-tufting",
	"teaching yoga classes",
	"riding their bike to work",
	"making bread",
	"telling you about her friends in similar fields of work",
	"jogging",
	"swimming",
	"international cinema",
	"reading (and recommending) motivational self-help books",
	"loves true crime podcasts",
	"playing puzzle games on Facebook",
	"going to the beach with their dog",
	"loves Adam Sandler movies",
	"having a bev",
	"watching the footy",
	"bants with the mates",
	"talking about themselves",
	"small talk",
	"over-sharing",
	"spacing out when you talk",
	"not getting enough sleep",
	"calling their mother",
	"environmental activism",
	"low-key a social media influencer",
	"flash cards",
	"does fake job interviews for fun",
	"running workshops on employability",
	"easy listening radio",
	"following the news",
	"listening to Missy Higgins",
	"watching political Netflix dramas",
	"trying out local restaurants",
	"eating spicy food",
	"selling second-hand furniture on Facebook Marketplace",
	"going to IKEA",
	"online shopping"


];

var randList6 = [
	"Aries",
	"Taurus",
	"Gemini",
	"Cancer",
	"Leo",
	"Virgo",
	"Libra",
	"Scorpio",
	"Sagittarius",
	"Capricorn",
	"Aquarius",
	"Pisces"
];

var randList7 = [
	"0%",
	"16%",
	"35%",
	"44%",
	"2%",
	"10%",
	"7%",
	"9%",
	"1%",
	"3%",
	"4%",
	"0.999%",
	"3.333%",
	"12%",
	"6%"
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