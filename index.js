const requestURL = "https://dragonball-api.com/api/characters?page=1&limit=58"; // Replac

function createDragonBallCard({name, ki, race, gender, description, image, affiliation}){
    return `
        <div class="card" style="width: 18rem;" id="cardDragonBall">
            <img src="${image}" class="card-img-top" alt="Imagen de personaje de Dragon Ball" style="max-height: 350px; object-fit: contain; width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6>KI : ${ki}</h6>
                <h6>Race : ${race}</h6>
                <h6>Gender : ${gender}</h6>
                <p class="card-text">${description}</p>
                <p class="card-text">Affiliation : ${affiliation}</p>
            </div>
        </div>
    `;

}

async function fetchDragonBallJson(){
    try{
        const response = await fetch(requestURL);
        if(!response.ok){
            throw new Error('Error de la solicitud: ' + response.status);
        }
        return response.json();
    }
    catch (error)
    {
        console.error('Error al obtener los datos :', error);
        return null;
    }
}


async function displayDragonBall() {
    const dragonBallSection = document.getElementById('dragonBallSection');
    const dragonBallData = await fetchDragonBallJson();

    if (dragonBallData && dragonBallData.items) {
        const dragonBallCards = dragonBallData.items.map(createDragonBallCard).join('');
        dragonBallSection.innerHTML = dragonBallCards;
    }
    else
    {
        console.error('No se encontraron datos de Dragon Ball.');
    }
}


displayDragonBall();