
/* Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición.
 La función debe retornar el miembro más antiguo.

Utiliza este array para probar tu función. */

const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
function findOldestXMen(xMen) {
let oldestMember = xMen[0]; //empezamos con el primer elemento del array

//  comparamos el año de aparición del miembro actual (xMen[i].year) con el del miembro más antiguo almacenado en oldestMember.year.
for (let i= 1; i < xMen.length; i++)  {

//  xMen[i] es el "miembro actual" del array en esta iteración
if (xMen[i].year < oldestMember.year) {

 // Actualizamos oldestMember si encontramos un miembro más antiguo    

 oldestMember = xMen[i];


}

  }

  return oldestMember;

}
 
//Para llamar a la función:

const oldestXmen = findOldestXMen(xMen);

console.log (oldestXmen);



//La función anterior sólo devuelve el más antiguo que encuentre primero. 

//En caso de querer que devuelve todos los miembros de 1963:




    
      

   
