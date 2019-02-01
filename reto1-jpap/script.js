fetch("https://rickandmortyapi.com/api/location").then((value) =>{  
return value.json();
}).then((value) =>{
    return value.results[0]
}).then((value) =>{
   console.log(value)
})
 
var result = new Array;
fetch("https://rickandmortyapi.com/api/character").then((value) =>{   
return value.json();
}).then((value) =>{
    
    result.push(value.results)
    return value.results
}).then((value) =>{
    /*
    let imagen = document.getElementById('imagen');
    let elem = document.createElement("img")
    elem.src = value.image
    imagen.appendChild(elem)
    //imagen.innerHTML= `<ima src= ${value.image}`>
   console.log(value.image)
   */
})
for(let i=0; i<10;i++){
    console.log(result[i])
}
