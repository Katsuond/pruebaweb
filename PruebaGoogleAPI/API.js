const URL = `https://www.googleapis.com/books/v1/volumes?q=time&printType=books&startIndex=${Math.floor(Math.random() * 50)}&maxResults=25&filter=paid-ebooks&key=AIzaSyDJUEF6sno3tSMCKJEZ055dGuDv9Hhes14`;
const container = document.getElementById('container');

async function Libros() {
    await fetch(URL)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                console.log("Error," + response.status);
            }
        })
        .then(data => {
            container.innerHTML = ""
            var Busqueda = [];
            console.log(data);
            for (var i = 0; i < 25; i++) {
                Busqueda.push(data.items[i]);
            }
            Busqueda.forEach(libros => {
                const libro = document.createElement("div");
                libro.classList.add('libro');
                const titulo = document.createElement('h3');
                const img = document.createElement('img');
                const language = document.createElement('p');
                img.setAttribute('src', libros.volumeInfo.imageLinks.smallThumbnail);
                img.classList.add("cover");
                titulo.innerHTML = libros.volumeInfo.title + "<br><br>";
                language.innerHTML = "<strong> Idioma Disponible: " + libros.volumeInfo.language + "<strong>";
                
                libro.appendChild(img);
                libro.appendChild(titulo);
                libro.appendChild(language);
                container.appendChild(libro);

            });
        })
        .catch(error => {
            console.log(error); 
        })
}

function MejorarCalidad(url){
    return url.replace("zoom=5", "zoom=15")
}
Libros();