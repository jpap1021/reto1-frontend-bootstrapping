fetch("https://rickandmortyapi.com/api/character").then((value) =>{   
return value.json();
}).then((value) =>{
    
    value.results.forEach(function(result) {
      llamarPersonaje(result)
      });
});

function random(){
    var x = Math.floor((Math.random() * 20) + 0);
}

let container = document.getElementById('conta');
let container2 = document.getElementById('conta2');

function llamarPersonaje(personaje){
    
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.textContent = personaje.name;
    let imagen = document.createElement("img");
    imagen.src= personaje.image;
    div.appendChild(imagen)
    div.appendChild(span)
    div.classList.add('orden')
    container.appendChild(div);
    

    span.addEventListener('click',function(){
        container.classList.add('none')
        container2.classList.add('show');
        let divpersonaje = document.createElement('div');
        let imagenPersonaje = document.createElement('div')
        let divlista = document.createElement('div');
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        li1.innerHTML += 'nombre ' + personaje.name;
        li2.innerHTML += 'creado ' + personaje.created;
        ul.appendChild(li1)
        ul.appendChild(li2)
        let img = document.createElement('img');
        img.src = personaje.image; 
        imagenPersonaje.appendChild(img)
        divlista.appendChild(ul)
        divpersonaje.appendChild(imagenPersonaje);
        divpersonaje.appendChild(divlista)
        divpersonaje.classList.add('detalle')
        divpersonaje.setAttribute('id','pers')
        container2.appendChild(divpersonaje);
        var pers = document.getElementById('pers')
        })
    }

       let home = document.getElementById('home')
        home.addEventListener('click',function(){
            container2.classList.add('none');
            pers.remove();
            container.classList.remove('none');
        })
     
        
         window.addEventListener('resize', function(){
             if(this.innerWidth < 768){
                    pers.classList.add('block')
                }
              else if(this.innerWidth > 768){
                    pers.classList.remove('block')
                }
            })
    