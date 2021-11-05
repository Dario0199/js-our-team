// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

//inserimento struttura dati card 

const cardsContainer = document.querySelector('.team-container');
const newName = document.getElementById('name');
const newRole = document.getElementById('role');
const newImage = document.getElementById('image');
const addMemberBtn = document.getElementById('addMemberButton');

const cards = [
    {  
        name: 'Wayne Barnett',
        role:'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    { 
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg', 
    },
    {  
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {  
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {  
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {  
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];
console.log(cards);

genCardTeam (cards, cardsContainer)

genNewMember(newName, newRole, newImage)

//iterazione delle card
function genCardTeam (cards, cardsContainer){
    
    cardsContainer.innerHTML = '';

    for(let i = 0; i < cards.length; i++){
        const cardItem = cards[i];
        console.log(cardItem);

        //creare markup delle cards
        cardsContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="img/${cardItem.image}" alt="${cardItem.name}"/>
            </div>
            <div class="card-text">
                <h3>${cardItem.name}</h3>
                <p>${cardItem.role}</p>
            </div>
        </div> 
        `;
    }
};


//generazione nuovi membri

addMemberBtn.addEventListener('click', () => {
    console.log('click');

    const NewMember = genNewMember(newName, newRole, newImage)

    cards.push(NewMember)

    genCardTeam (cards, cardsContainer)
});

//generazione dati inseriti 
function genNewMember(name, role, image){
    const newCards = {
        name: name.value,
        role: role.value,
        image: image.value,
    };

    name.value = '';
    role.value = '';
    image.value = '';

    return newCards;

}
