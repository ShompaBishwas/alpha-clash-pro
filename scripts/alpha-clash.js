
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

function continueGame(){
    //Step-1 Generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet', alphabet);

    // Set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    // Set Background Color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

