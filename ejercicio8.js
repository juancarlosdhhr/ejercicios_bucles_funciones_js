/* Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y 
sus influencias directas e imprime cada par por consola. */

const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
  ];
  
  // Añade tu código de bucle aquí

  
//Creamos un buble anidado para recorrer todos los artistas y sus influencias

  for (let i = 0; i < artists.length; i++) {  
      const artist = artists[i]; //-> Para obtener el artista
      const influences = artist.influences; //-> Para obtener sus influencias
      

  for (let j = 0; j < influences.length; j++) {  
    
    const influence = influences[j]; //Para obtener la influencia
    
    console.log(`${artist.name} is influenced by ${influence}`); 
}


}


  
 
