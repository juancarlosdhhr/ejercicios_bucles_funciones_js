
/* Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y
 los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola. */

const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  
  // Añade tu código de bucle aquí


  
  

  // Objeto para almacenar las películas agrupadas por década
const moviesByDecade = {};

// Recorre cada película en la lista de películas de Star Wars
for (let i = 0; i < starWarsMovies.length; i++) {
    // Obtén la película actual
    const movie = starWarsMovies[i];

    // Calcula la década. Ejemplo: 1977 -> 1970, 1980 -> 1980
    const decade = Math.floor(movie.releaseYear / 10) * 10;

    // Si el objeto moviesByDecade no tiene una entrada para esta década, crea una
    if (!moviesByDecade[decade]) {
        moviesByDecade[decade] = []; // Crea un array vacío para esta década
    }

    // Añade la película al array correspondiente a esta década
    moviesByDecade[decade].push(movie.title);

    //Dependiendo de la decada metele dentro el titulo de la pelicula
}

// Imprime el resultado
console.log(moviesByDecade);