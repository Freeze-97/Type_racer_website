/*
Tommy Yasi
toya1800
toya1800@student.miun.se
*/

// The 3 texts
const footballText = "Association football, more commonly known as football or soccer," +
    " is a team sport played with a spherical ball between two teams of 11 players. " +
    "It is played by approximately 250 million players in over 200 countries and dependencies, " +
    "making it the world's most popular sport.";

const windText = "Wind is the flow of gases on a large scale. On the surface of the Earth," +
    " wind consists of the bulk movement of air. " +
    "In outer space, solar wind is the movement of gases or charged particles from the Sun through space.";

const theBogeyBeastText = "A woman finds a pot of treasure on the road while she is returning from work. " +
    "Delighted with her luck, she decides to keep it. As she is taking it home, " +
    "it keeps changing. However, her enthusiasm refuses to fade away.";

// Play counter so addEventListener is only added once
let playCounter = 0;

function startAndTextSelector() {
    //const selectElement = document.querySelector('.textChoice');
    const selectElement = document.getElementById("textChoice");
    let name = document.querySelector('.textName');
    let author = document.querySelector('.author');
    let text = document.querySelector('.text');
    
    // No "changes" is done when the site is first loaded so this is used as pre-settings
    name.textContent = "Football";
    author.textContent = "Richard Wilson";
    text.textContent = footballText;

    selectElement.addEventListener('change', (event) => {
        if(event.target.value === "football") {
            name.textContent = "Football";
            author.textContent = "Richard Wilson";
            text.textContent = footballText;
        }
        if(event.target.value === "wind") {
            name.textContent = "Wind";
            author.textContent = "Jack Burton";
            text.textContent = windText;
        }

        if(event.target.value === "theBogeyBeast") {
            name.textContent = "The Bogey Beast";
            author.textContent = "Flora Annie Steel";
            text.textContent = theBogeyBeastText;
        }
    });

    // Disable input field when the game is not being played
    document.getElementById("inputBox").disabled = true;
}

// Stats
let errors = 0;
let correct = 0;
let charCounter = 0; // Which word to be tested
let position = 0; // Which char to highlight

// Get chosen text
let fullText;

function startGame() {
    // Reset all stats
    document.getElementById("errors").innerHTML = '0';
    document.getElementById("accuracy").innerHTML = "0 %";
    document.getElementById("gWPM").innerHTML = '0';
    document.getElementById("nWPM").innerHTML = '0';

    fullText = getChosenText();
    let documentText = document.querySelector('.text');
    documentText.innerHTML = "";

    // Give every char <span> element to highlight them
    for(let i = 0; i < fullText.length; i++) {
        const char = fullText[i];
        documentText.innerHTML += "<span id='" + i + "'>" + char + "<span/>";
    }
    document.getElementById("0").style.backgroundColor = "blue"; // As a start

    let input = document.getElementById("inputBox");
    input.disabled = false; // Enable so the user can input words

    const msToMin = 60000;
    let startTime = new Date().getTime() / msToMin;

    if(playCounter === 0) {
        input.addEventListener("keypress", (event) => {
            if (event.key === ' ' || event.key === "Space") {
                input.value = ''; // Clear after user press space
            }
            document.getElementById(position).style.backgroundColor = null;
            position++;
            document.getElementById(position).style.backgroundColor = "blue";
            let finalInput = event.key;

            if (charCounter < fullText.length) {
                if (finalInput === fullText[charCounter]) {
                    correct++;
                } else {
                    errors++;
                }
            }
            const elapsedMinutes = (new Date().getTime() / msToMin) - startTime;
            const gWPM = ((position / 5) / elapsedMinutes).toFixed(1);
            const nWPM = (gWPM - (errors - elapsedMinutes)).toFixed(1);

            document.getElementById("errors").innerHTML = errors.toString();
            document.getElementById("accuracy").innerHTML =
                ((correct / (charCounter + 1)) * 100).toFixed(1).toString() + " %";
            document.getElementById("gWPM").innerHTML = gWPM;
            document.getElementById("nWPM").innerHTML = nWPM;

            if(charCounter === fullText.length - 1) {
                document.getElementById("button").click();
            }
            charCounter++;
        });
    }
    playCounter++;
}

function playAndStop () {
    let button = document.getElementById("button");
    button.addEventListener("click", function () {changeButton(button);});
}

function changeButton(button) {
    if (button.getAttribute("src") === "img/Play.png") { // Pressing start
        button.setAttribute("src", "img/Stop.png");
        document.getElementById("textChoice").disabled = true;
        startGame();
    } else { // Pressing stop
        button.setAttribute("src", "img/Play.png");
        document.getElementById("inputBox").disabled = true;
        document.getElementById("textChoice").disabled = false;

        // Clear stats
        errors = 0;
        correct = 0;
        charCounter = 0;
        position = 0;
    }
}

function getChosenText() {
    const chosenText = document.querySelector('.textName');

    let fullText;
    switch(chosenText.textContent) {
        case "Football":
            fullText = footballText;
            break;
        case "Wind":
            fullText = windText;
            break;
        case "The Bogey Beast":
            fullText = theBogeyBeastText;
    }
    return fullText;
}

// Add function in eventListener, function will be running when the page has loaded
window.addEventListener("load", startAndTextSelector, false);
window.addEventListener("load", playAndStop, false);
