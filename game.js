import { getClue as getClueFromCallback } from './callback-version.js';
import { getClue as getClueFromPromise } from './promise-version.js';
import { getClue as getClueFromAsyncFunction } from './async-await-version.js';

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const value = document.getElementById("value");
const catTitle = document.getElementById("category-title");
const score = document.getElementById("score");
const invalidCount = document.getElementById("invalid-count");
const checkResponse = document.getElementById("check-response");
let playerScore = 0;



document
    .getElementById("use-callback")
    .addEventListener('click', () => {
        getClueFromCallback((err, clue) => {
            if (err !== null) {
                return console.error(err.message);
            } else {
                setHtml(clue);
            }
            checkResponse.classList.remove('is-hidden');
            answer.classList.add('is-hidden');
            document.getElementById('correct-answer').classList.add('is-hidden');

        });
    });

document
    .getElementById('use-promise')
    .addEventListener('click', () => {
        getClueFromPromise()
            .then(clue => setHtml(clue))
            .catch(err => console.error(err.message));
        checkResponse.classList.remove('is-hidden');
        answer.classList.add('is-hidden');
        document.getElementById('correct-answer').classList.add('is-hidden');
    })
document
    .getElementById('use-async-await')
    .addEventListener('click', async () => {
        try {
            const clue = await getClueFromAsyncFunction();
            setHtml(clue);
        } catch (err) {
            console.error(err.message);
        }
        checkResponse.classList.remove('is-hidden');
        answer.classList.add('is-hidden');
        document.getElementById('correct-answer').classList.add('is-hidden');
    })
checkResponse.addEventListener('click', () => {
    const playerResponse = document.getElementById("player-response");
    if (playerResponse.value.trim() === answer.innerHTML.trim()) {
        playerScore += Number(value.innerHTML);
    } else {
        playerScore -= Number(value.innerHTML);
    }

    score.innerHTML = `Player Score: ${playerScore}`;
    playerResponse.value = '';
    answer.classList.remove('is-hidden');
    document.getElementById("correct-answer").classList.remove('is-hidden');
    console.log(score);
})


function setHtml(clue) {
    question.innerHTML = clue.question;
    answer.innerHTML = clue.answer;
    value.innerHTML = clue.value;
    catTitle.innerHTML = clue.category.title;
    if (clue.invalidCount > 0) {
        invalidCount.innerHTML = "invalid";
    } else {
        invalidCount.innerHTML = "valid";
    }
}