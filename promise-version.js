
export function getClue() {
    return fetch('https://jservice.xyz/api/random-clue')
        .then((res) => {
            console.log(res);
            if (!res.ok) throw new Error(res.status, res.statusText);
            return res.json();
        })
}