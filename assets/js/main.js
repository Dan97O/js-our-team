/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto


MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.


MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe


BONUS 1:
Trasformare la stringa foto in una immagine effettiva


BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!


DATI:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

//const let 
//Creare l’array di oggetti con le informazioni fornite.
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//Stampare le stesse informazioni su DOM sottoforma di stringhe
//Trasformare la stringa foto in una immagine effettiva
//Organizzare i singoli membri in card/schede

const teamElement = document.querySelector('.information_teams');
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
const membersTeam = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: "./assets/img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: './assets/img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: './assets/img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: './assets/img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: './assets/img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: './assets/img/barbara-ramos-graphic-designer.jpg',
  },
];


//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < membersTeam.length; i++) {
    let member = membersTeam[i];
    console.log(member);


    //MILESTONE 2:
    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    const divEl = document.createElement("div");
    /* divEl.textContent = `Nome: ${membersTeam[i].name}, Ruolo: ${membersTeam[i].role}, Foto: ${membersTeam[i].photo}`; */
    teamElement.appendChild(divEl)

    //BONUS 1:
    //Trasformare la stringa foto in una immagine effettiva
    //BONUS 2:
    //Organizzare i singoli membri in card/schede
    const markup = `
        <div class="card">
            <img src="${membersTeam[i].photo}" alt="" class="card-img-top">
            <div class="card-body">
                <h3>
                    ${membersTeam[i].name} 
                </h3>
                <p>
                    ${membersTeam[i].role}
                </p>
            </div>
        </div>`
    divEl.innerHTML += markup;
}

