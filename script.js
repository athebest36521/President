var quotesArray = ["Liberty cannot be preserved without general knowledge among the people",
"Fear is the foundation of most governments", 
"A government of laws, and not of men", 
"In politics the middle way is none at all", 
"Liberty will reign in America!", 
"You will never be alone with a poet in your pocket", 
"Thanks be to God, that he gave me Stubborness, when I know I am right",
"The happiness of society is the end of government", 
"That the meanest and lowest of the people are, by the unalterable, indefeasible laws of God and nature, as well entitled to the benefit of the air to breathe, light to see, food to eat and clothes to wear as the nobles or the king"];

    var randomNumber = Math.floor(Math.random() * quotesArray.length);
// var splitQuote = quotesArray[randomNumber].split(' — ');

document.getElementById('quote').textContent = '"'+quotesArray[randomNumber]+'"' ;

quizQuestionArray=['Where was John Adams born?',
    'Who were John Adams parents?',
];
quizQuestionOptionsArray=['A: Massachusetts, B: New York, C: Virginia, D: Pennsylvania',
    'A: John and Abigail, B: John and Susanna, C: John and Martha, D: John and Elizabeth',
];
quizQuestionAnswerArray=['A','B'];

var quizQuestionNumber = 0;
document.getElementById('quizQuestion').textContent = quizQuestionArray[quizQuestionNumber];
document.getElementById('quizQuestionOptions').textContent = quizQuestionOptionsArray[quizQuestionNumber];
document.getElementById('quizQuestionAnswer').textContent = quizQuestionAnswerArray[quizQuestionNumber];

