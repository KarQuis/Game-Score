import {$} from "../js/library.js";

const reviewUser = $("#reviewsUser")[0];

const getReviews = async (token, id)=> {   //verificar datos
    try {
        const response = await fetch('/review/profile/verify',
        {
          method:'GET',
          headers: {'Content-Type': 'application/json', token: token, id: id},
        })
        return response.json();
    } catch (error) {
        console.log(`Error: ${err}`)
    }
};

const goGame =  (id)=>{
    window.open(`/game/${id}`, '_self');
}

const reloadReviews = async (review)=> {    //Funcion para mostrar reviews
    reviewUser.innerHTML = "";
    review.forEach(element => {
        let newArticle = document.createElement("article"); //Crear articulo
        newArticle.setAttribute("data-info", `${element.idGame}`)   //integrar atributos a la div
        newArticle.setAttribute("class", "cardReview hover:cursor-pointer bg-[#F8F4EA] shadow-lg rounded-lg my-4 p-4")
        let newP1 = document.createElement("p");    //Crear parrafo
        newP1.setAttribute("class", "text-lg py-4");
        newP1.innerText = `Score: ${element.score}`;
        newArticle.appendChild(newP1);  //Insertar elementos en div
        let newP2 = document.createElement("p");    //Crear parrafo
        newP2.setAttribute("class", "pt-1");
        newP2.innerText = `Reseña: ${element.content}`;
        newArticle.appendChild(newP2);  //Insertar elementos en div

        reviewUser.appendChild(newArticle); //Agregar review a nueva div
    });
    $(".cardReview").event("click", (e)=>{    //Evento para redirigir info de juego
        const idGame = e.currentTarget.dataset.info ;  //currentTarget: traer elemento padre HTML seleccionado; dataset:extraer un campo 'data-' de HTML
        goGame(idGame);
    });
};

$("#seeReview").event("click", async ()=>{  //Evento para ver reviews
    const reviews = await getReviews(localStorage.getItem("gamescore-jwt"), localStorage.getItem("gamescore-userId"));
    if (reviews.code) {
        alert(reviews.message)
    } else {
        reloadReviews(reviews)
    }
});