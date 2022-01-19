/* const data = [
    "Gergely Kiss",
    "Krisztián Bui",
    "Buczkó Balázs",
    "András Varga",
    "Borbála Teréz Kovács"
];
 */

const data = [
    {
        name: "Gergely Kiss",
        favoriteFood: "csirke/rizs"
    },
    {
        name: "Krisztián Bui",
        favoriteFood: "banán"
    },
    {
        name: "Buczkó Balázs",
        favoriteFood: "kolbászos rájás pizza"
    },
    {
        name: "András Varga",
        favoriteFood: "brassói"
    },
    {
        name: "Borbála Teréz Kovács",
        favoriteFood: "avokádó"
    },
    {
        name: "Benett Viszokai",
        favoriteFood: "alma"
    },
    {
        name: "Krisztián Pörneczi",
        favoriteFood: "almás pite"
    },
]
function loadEvent() {
    console.log("Az oldal betöltődött");

    const root = document.querySelector("#root")

    for (const frontendStudent of data) {
        root.insertAdjacentHTML("beforeend", `
        <section> 
            <h1>${frontendStudent.name}</h1>
            <p>${frontendStudent.favoriteFood}</p>
        </section>
        `)
    }
}
window.addEventListener("load", loadEvent);