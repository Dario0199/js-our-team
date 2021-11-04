// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

//inserimento struttura dati card 
const cards = [
    {  
        name: 'Wayne Barnett',
        role:'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    { 
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg', 
    },
    {  
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg',
    },
    {  
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {  
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'img/scott-estrada-developer.jpg',
    },
    {  
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg',
    },
];
console.log(cards);
console.table(cards);

//container in cui sono contenute le card
const cardsContainer = document.querySelector('.team-container');

//iterazione delle card
for(let i = 0; i < cards.length; i++){
    const cardItem = cards[i];
    console.log(cardItem);

    //creare markup delle cards
    cardsContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src="${cardItem.image}" alt="${cardItem.name}"/>
        </div>
        <div class="card-text">
            <h3>${cardItem.name}</h3>
            <p>${cardItem.role}</p>
        </div>
    </div> 
    `;
}