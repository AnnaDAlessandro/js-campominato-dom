const btnHtml = document.getElementById("btnPlay")

const grigliaHtml = document.getElementById("griglia")

const punteggioHtml = document.getElementById("punteggio")




btnHtml.addEventListener(`click`, function(){


    grigliaHtml.style.setProperty("display","flex")

    let arrayBombe= []

    do{
        let randomica = RandoNumber(100)
       if(!arrayBombe.includes(randomica)){
        arrayBombe.push(randomica)
       }
    }while(arrayBombe.length<16)

    console.log(arrayBombe)

    


  for(let i = 1; i<100; i++ ){
    let box= document.createElement("div")
    box.classList.add("box")
    box.innerHTML=`<span>${[i]}</span>`

    box.addEventListener(`click`, function(){
        let scegliSpan= this.querySelector("span").innerText 

        if( arrayBombe.includes (parseInt( scegliSpan ) )){
            this.classList.add("red")
        }else{
            this.classList.add("sky")
        }
        
       punteggio++

       punteggioHtml.innerHTML= `<h2>Punteggio:${punteggio}</h2>`
        
    })  


    grigliaHtml.append(box)
}
})


function RandoNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
