/*********************** GLOBAL VARIABLES *********************/

/* Display Element Variables */

let [storyForm, submitButton, story, playAgain] = ['story-form', 'submit-button', 'story', 'play-again'].map(id => document.getElementById(id));

/* Input Variables */

let variables = [noun1, place, noun2, noun3, noun4, adjective1, verb1, number, adjective2, bodyPart, verb2] = ['noun1', 'place', 'noun2', 'noun3', 'noun4', 'adjective1', 'verb1', 'number', 'adjective2', 'body-part', 'verb2'].map(id => document.getElementById(id));

/* Final Story Variables */

let newVariables = [firstNoun, placeName, secondNoun, thirdNoun, fourthNoun, firstAdjective, firstVerb, numberWord, secondAdjective, bodyWord, secondVerb] = ['first-noun', 'place-name', 'second-noun', 'third-noun', 'fourth-noun', 'first-adjective', 'first-verb', 'number-word', 'second-adjective', 'body-word', 'second-verb'].map(id => document.getElementById(id));

/* Story Functions */

story.style.display = 'none';

function wordIn(input, output) {
    output.innerHTML = input.value;
};

function reset() {
    storyForm.style.display = 'flex';
    story.style.display = 'none';
    variables.map(word => word.value = '');
};

function makeStory() {
    for (i = 0; i < variables.length; i++) {
        wordIn(variables[i], newVariables[i]);
    };
    storyForm.style.display = 'none';
    story.style.display = 'block';
};

submitButton.addEventListener('click', makeStory);
playAgain.addEventListener('click', reset);