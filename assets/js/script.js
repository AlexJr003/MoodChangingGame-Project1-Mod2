const elementoTipo = document.querySelector('#tipo')
const elementoImagem = document.querySelector('#imagem');
let elementoButton = document.querySelector('#change');
let humor = 0;

function mudaHumor(){


    if (humor == 0){
        elementoImagem.src = "./assets/img/shadowDisappointed.gif"
        elementoTipo.innerText = "Sad";
        console.log('Shadow is Sad')
        humor++
    } else if (humor == 1){
        elementoImagem.src = "./assets/img/shadowHappy.gif"
        elementoTipo.innerText = " Happy ";
        console.log('Shadow is Happy')
        humor = humor + 1
    } else if (humor == 2){
        elementoImagem.src = "./assets/img/shadowAngry.gif"
        elementoTipo.innerText = " Angry ";
        console.log('Shadow is Angry')
        humor = humor + 1
    }
    else if (humor == 3){
    elementoImagem.src = "./assets/img/shadowProud.gif"
    elementoTipo.innerText = " Proud ";
    console.log('Shadow is Proud')
    humor = humor + 1  
    }
    else if (humor == 4){
        elementoImagem.src = "./assets/img/shadowBored.gif"
        elementoTipo.innerText = " Bored ";
        console.log('Shadow is Bored')
        humor = humor + 1  
        }
        else if (humor == 5){
        elementoImagem.src = "./assets/img/shadowSuper.gif"
            elementoTipo.innerText = "Super Shadow";
            console.log('Shadow is Super')
            humor = humor + 1  
        }     
        else if (humor == 6){
        elementoImagem.src = "./assets/img/shadowBadAss2.gif"
        elementoTipo.innerText = "Bad-Ass";
        console.log('Shadow is Bas-Ass')
        humor = 0 
        }
                         
}























