const $ = (arg)=>{  //Libreria $:seleccionar elemento y realizar un evento
    let element;
    if (typeof arg === "string") {  //Si es string
        element = document.querySelectorAll(arg);
    };
    if (arg instanceof HTMLElement) {   //Si es HTML
        element = [arg];
    };
    element.event = (evento, callback)=>{   //propiedad .evento
        element.forEach(elemento => {
            elemento.addEventListener(evento, callback);
        });
        return element;
    };
    return element;
};

const gamesCards = $("#gamesCards");
const page = $("#page")[0];

const goPage = (id)=> {   //Funcion para mostrar info de cada card
    window.open(`/game/${id}`, '_self');
};

const reloadGames = async (page)=> {  //Funciòn para reemplazar cards
    try {
        const request = await fetch('/game/page/next',
        {
          method:'GET',
          headers: {'Content-Type': 'application/json', 
            'page': page
            }
        })
        const response = await request.json();
        return response;
    } catch (err) {
        console.log(`Error: ${err}`)
    }
};

// let card = document.getElementsByClassName("card")   //forma de obtener info de las card sin libreria
// card = [...card];    //... : para extraer arrays
// card.forEach((e)=>{
//     e.addEventListener("click", ()=>{
//         console.log(e)
//     })
// })

$(".card").event("click", (e)=>{    //Evento para redirigir info de juego
    const idGame = e.currentTarget.dataset.info ;  //currentTarget: traer elemento padre HTML seleccionado; dataset:extraer un campo 'data-' de HTML
    goPage(idGame);
});

$("#nextPage").event("click", async (e)=> { //evento para cambiar de pagina
    const numberPage = Number(page.innerText);  
    const games = await reloadGames(numberPage);
    console.log(games)
});

