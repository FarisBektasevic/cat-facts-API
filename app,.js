const fact = document.getElementById('cat-fact')
const btn = document.getElementById('fact-btn')
console.log(btn)
console.log(fact)

facts()

btn.addEventListener('click', () => {
    facts()
})

async function facts() {
    let response = await fetch(`https://catfact.ninja/facts?limit=1`)
    if (response.status == 200) {
        let dataObj = await response.json()
        let catFact = await dataObj.data
        fact.innerHTML = catFact[0].fact
    }
}