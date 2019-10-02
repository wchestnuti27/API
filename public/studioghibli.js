const favMovies = document.querySelector('form');
const topMovies = document.querySelector('ol');

favMovies.addEventListener('submit', bestMovie);

function bestMovie(event) {
    event.preventDefault();
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(json => favMovie(json))
        .catch(error => console.log(error));
}

    function favMovie(data) { 
        console.log(data)
        let fav1 = document.createElement("li")
        let fav2 = document.createElement("li")
        let fav3 = document.createElement("li")
        let fav4 = document.createElement("li")
        let fav5 = document.createElement("li")

        fav1.innerText=data[10].title 
        topMovies.appendChild(fav1)

        fav2.innerText=data[8].title 
        topMovies.appendChild(fav2)

        fav3.innerText=data[18].title 
        topMovies.appendChild(fav3)
       
        fav4.innerText=data[3].title 
        topMovies.appendChild(fav4)

        fav5.innerText=data[11].title 
        topMovies.appendChild(fav5)
    }
    