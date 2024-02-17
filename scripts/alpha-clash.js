
/* 
function play(){
    //Hide the home Screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    //Show the PLayground Section
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
}
*/
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('Player Pressed', playerPressed);

    //Stop Game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }


    // Get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // Check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');

        //Update Score
        //Get the current score 

        //----------------------------------
        /* const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScoreText);

        //Increase the score by 1
        const newScore = currentScore + 1;

        //Show the updated score
        currentScoreElement.innerText = newScore;
        */
        //------------------------------------

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        //Start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You missed. You lost a life.');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        //----------------------------------
        /*
        //Step-1: Get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        //Step-2: Reduce the life count
        const newLife = currentLife - 1;

        //Step-3: DIsplay the updated life count
        currentLifeElement.innerText = newLife;
        */
        ///----------------------------------

    }
}

//Capture keyboard Key Press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    //Step-1 Generate a random alphabet
    const alphabet = getARandomAlphabet();
    //console.log('Your Random Alphabet', alphabet);

    // Set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    // Set Background Color
    setBackgroundColorById(alphabet);
}

function play() {
    //Hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //Reset Life and Score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

//Game Over
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //Update Final Score
    const lastScore = getTextElementValueById('current-score');
    //console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //Clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    //console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
