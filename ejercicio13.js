/* Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array
 con los nombres de los actores y sus edades.

Averigua como hallar el año actual en tus cálculos. */

const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
  ];
  
  function calculateActorsAges(actors) {
    const CurrentYear = new Date().getFullYear();   //  Para hallar el año actual
    const result = []; // Para crear un array nuevo donde almacenar los resultados
 
 for (let i=0; i < actors.length; i++) { 
const actor = actors[i]; //Para hallar el actor actual
const age  = CurrentYear - actor.born //Para calcular la edad de cada actor

result.push({name: actor.name, age: age}); // Para guardar los nombres y las edades en el array nuevo "result"
 }
 
 return result;  
  }

  const AgesOfActors = calculateActorsAges(actors);

  console.log(AgesOfActors);

 
  

