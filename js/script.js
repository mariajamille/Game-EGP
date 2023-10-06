// var btn = document.querySelector("#inicio")
// var container = document.querySelector(".contain")
// var close = document.querySelector("#close")

// btn.addEventListener('click', function () {

//     if (container.style.display === 'block') {
//         container.style.display = 'none'
//     } else {
//         btn.style.display = 'none'
//         container.style.display = 'block'
//     }
// })
const modal01 = document.querySelector(".dia01")
const modal02 = document.querySelector(".dia02")
const modal03 = document.querySelector(".dia03")
const closeAll01 = document.querySelector("#close-all01")
const closeAll02 = document.querySelector("#close-all02")
const closeAll03 = document.querySelector("#close-all03")
const containerModal = document.querySelector("#modal-js")
// var btn = document.querySelector("#close1")
// var container = document.querySelector("#modal-teste")
// var abrir = document.querySelector("#abrir")
// var close = document.querySelector("#close")


// btn.onclick = function(){
//     modal.style.display = 'none'
//     // container.style.display = 'none'
// }

// btn.addEventListener('click', function () {
//     // if (modal.style.display === 'block') {
//         modal.style.display = 'none'
//     // } else {
//     //     btn.style.display = 'none'
//     //     container.style.display = 'block'
//     // }
// })

// btn.addEventListener('click', function () {

// if (container.style.display === 'block') {
// container.style.display = 'none'
// modal.style.display = 'none'
// } else {
//     btn.style.display = 'none'
//     container.style.display = 'block'
// }
// })

// close.onclick = () => {
//     container.style.display = 'none'
//     btn.style.display = 'block'
// }

// const exit_btn = info_box.querySelector(".buttons .quit")
// const continue_btn = info_box.querySelector(".buttons .restart")
// const info_box = document.querySelector(".info_box")

// const teste = document.querySelector(".modal")
const button = document.querySelector("button")
const buttonClose01 = document.querySelector("#close01")
const buttonClose02 = document.querySelector("#close02")
const buttonClose03 = document.querySelector("#close03")
const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector("#check-word"),
    confirmar = document.querySelector("#mostrarDiv");
// var img = document.getElementById('imagem')

// button.onclick = function () {
//     modal01.show()
// }
button.onclick = function () {
    modal01.show()
    modal02.show()
    modal03.show()
}

// const start_btn = document.querySelector(".start_btn button");
// const container = document.querySelector(".container");

// if startQuiz button clicked
// start_btn.onclick = ()=>{
//     container.classList.add("activeInfo"); //show info box
// }

// if exitQuiz button clicked
// exit_btn.onclick = ()=>{
//     container.classList.remove("activeInfo"); //hide info box
// }


// let correctWord, timer;

// const initTimer = maxTime => {
//     clearInterval(timer);
//     timer = setInterval(() => {
//         if(maxTime > 0) {
//             maxTime--;
//             return timeText.innerText = maxTime;
//         }
//         alert(`Opa! Seu tempo acabou! ${correctWord.toUpperCase()} é a palavra correta!`);
//         initGame();
//     }, 1000);
// }

// continue_btn.onclick = () => {
//     info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.add("activeQuiz"); //show quiz box
// }

const initGame = () => {
    // initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();


const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) return modal01.show();
    if (userWord !== correctWord) return modal03.show();
    modal02.show();
    initGame();
}
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);


// Div transparente:
// containerModal.addEventListener('click', (e) => {
//     if(e.target.id == 'modal-js'){
//         containerModal.classList.remove(modal01)
//     }
// })

// buttonClose02.onclick = function () {
//     modal02.close()
// }

// buttonClose03.onclick = function () {
//     modal03.close()
// }

// buttonClose01.onclick = function () {
//     modal01.close()  
// }

// divTransparente.addEventListener('click', function () {

//     if (container.style.display === 'block') {
//         container.style.display = 'none'
//     } else {
//         btn.style.display = 'none'
//         container.style.display = 'block'
//     }
// })


buttonClose01.onclick = () => {
    divTransparente.style.display = 'none'
    modal01.close() 
}

buttonClose02.onclick = () => {
    divTransparente.style.display = 'none'
    modal02.close() 
}

buttonClose03.onclick = () => {
    divTransparente.style.display = 'none'
    modal03.close() 
}

const mostrarDivButton = document.getElementById('check-word');
const divTransparente = document.getElementById('divTransparente');

mostrarDivButton.addEventListener('click', () => {
    divTransparente.style.display = 'block';
});

divTransparente.addEventListener('click', () => {
    divTransparente.style.display = 'none';
    modal01.close()
    modal02.close() 
    modal03.close() 
    // Adicione aqui o código da ação que deseja executar quando a div transparente for clicada.
});

// divTransparente.onclick = function () {
//     // modal02.close()  
//     // divTransparente.style.display = 'none';
//     document.querySelector(".exampleModalToggle2").remove()
//     modal02.style.display = 'none';
// }


// divTransparente.addEventListener('click', function () {

//     if (container.style.display === 'block') {
//         container.style.display = 'none'
//     } else {
//         btn.style.display = 'none'
//         container.style.display = 'block'
//     }
// })


// Butões acionados com teclas:
// document.addEventListener("keypress", function(o){
//     if(o.key === 'Enter'){
//         checkBtn.click()
//     }
// });



// confirmar.addEventListener("keypress", function(e) {

//     if(e.key === "Enter"){

//        confirmar.click();

//     }
// });


