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
const containerModal = document.querySelector("#modal-js")


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
    if (!userWord) return modal01.show(), divTransparente.style.display = 'block';
    if (userWord !== correctWord) return modal03.show(), divTransparente.style.display = 'block';
    modal02.show() , d2.style.display = 'block';
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

// mostrarDivButton.addEventListener('click', () => {
//     divTransparente.style.display = 'block';
// });

divTransparente.addEventListener('click', () => {
    divTransparente.style.display = 'none';
    modal01.close()
    modal03.close()
    // Adicione aqui o código da ação que deseja executar quando a div transparente for clicada.
});
d2.addEventListener('click', () => {
    d2.style.display = 'none';
    modal02.close()
    // Adicione aqui o código da ação que deseja executar quando a div transparente for clicada.
});



