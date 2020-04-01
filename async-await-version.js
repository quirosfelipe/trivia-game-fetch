export async function getClue() {
    const res = await fetch('https://jservice.xyz/api/random-clue')
    if (!res.ok) throw new Error(res.status, res.statusText);
    return res.json();
    // const response = await res.json();
    // return response;
}
