/*********************** GLOBAL VARIABLES *********************/

/* Input Variables */

let storyForm = document.getElementById('story-form');
let noun1 = document.getElementById('noun1');
let place = document.getElementById('place');
let noun2 = document.getElementById('noun2');
let noun3 = document.getElementById('noun3');
let noun4 = document.getElementById('noun4');
let adjective1 = document.getElementById('adjective1');
let verb1 = document.getElementById('verb1');
let number = document.getElementById('number');
let adjective2 = document.getElementById('adjective2');
let bodyPart = document.getElementById('body-part');
let verb2 = document.getElementById('verb2');
let submitButton = document.getElementById('submit-button');

/* Final Story Variables */

let story = document.getElementById('story');
let firstNoun = document.getElementById('first-noun');
let placeName = document.getElementById('place-name');
let secondNoun = document.getElementById('second-noun');
let thirdNoun = document.getElementById('third-noun');
let fourthNoun = document.getElementById('fourth-noun');
let firstAdjective = document.getElementById('first-adjective');
let firstVerb = document.getElementById('first-verb');
let numberWord = document.getElementById('number-word');
let secondAdjective = document.getElementById('second-adjective');
let bodyWord = document.getElementById('body-word');
let secondVerb = document.getElementById('second-verb');
let playAgain = document.getElementById('play-again');

/* Story Functions */

story.style.display = 'none';

function wordIn(input, output) {
    output.innerHTML = input.value;
};

function reset() {
    storyForm.style.display = 'flex';
    story.style.display = 'none';
    noun1.value = '';
    place.value = '';
    noun2.value = '';
    noun3.value = '';
    noun4.value = '';
    adjective1.value = '';
    verb1.value = '';
    number.value = '';
    adjective2.value = '';
    bodyPart.value = '';
    verb2.value = '';
};

function makeStory() {
    wordIn(noun1, firstNoun);
    wordIn(place, placeName);
    wordIn(noun2, secondNoun);
    wordIn(noun3, thirdNoun);
    wordIn(noun4, fourthNoun);
    wordIn(adjective1, firstAdjective);
    wordIn(verb1, firstVerb);
    wordIn(number, numberWord);
    wordIn(adjective2, secondAdjective);
    wordIn(bodyPart, bodyWord);
    wordIn(verb2, secondVerb);
    storyForm.style.display = 'none';
    story.style.display = 'block';
};

submitButton.addEventListener('click', makeStory);
playAgain.addEventListener('click', reset);
