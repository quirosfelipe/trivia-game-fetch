export function getClue(cb) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status < 200 || xhr.status >= 300) return;
        const question = JSON.parse(xhr.responseText);
        cb(null, question);
    });
    xhr.open('GET', 'https://jservice.xyz/api/random-clue');
    xhr.send();
}

