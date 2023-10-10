
const modal01 = document.querySelector(".modal01")
const modal02 = document.querySelector(".modal02")
const modal03 = document.querySelector(".modal03")
const containerModal = document.querySelector("#modal-js")

const button = document.querySelector(".btn-game")
const buttonClose01 = document.querySelector("#close01")
const buttonClose02 = document.querySelector("#close02")
const buttonClose03 = document.querySelector("#close03")

const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector("#refresh-word"),
    checkBtn = document.querySelector("#check-word"),
    confirmar = document.querySelector("#mostrarDiv");


//FUNÇÃO PARA VERIFICAR AS PALAVRAS
const initGame = () => {
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
    modal02.show(), d2.style.display = 'block';
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);


//FUNÇÃO COM OS MODAIS DAS IMAGENS 
// BUTÕES COM FUNÇÃO PARA FECHAR MODAIS COM ANIMAÇAO:
// BUTÃO DE FECHAR QUANDO A RESPOSTA FOR VAZIA:
buttonClose01.addEventListener("click", function () {
    modal01.classList.add("fade-out");

    setTimeout(function () {
        modal01.classList.remove("fade-out");
        divTransparente.style.display = 'none'
        modal01.close()
    }, 400);
});

// BUTÃO DE FECHAR QUANDO A RESPOSTA FOR INVALIDA:
buttonClose03.addEventListener("click", function () {
    modal03.classList.add("fade-out");

    setTimeout(function () {
        modal03.classList.remove("fade-out");
        divTransparente.style.display = 'none'
        modal03.close()
    }, 400);

});


// BUTÃO PARA FECHAR O MODAL DE ACERTO:
buttonClose02.onclick = () => {
    d2.style.display = 'none'
    modal02.close()
}

//FUNÇÃO PARA FECHAR OS MODAIS COM ANIMAÇÃO QUANDO CLICAR FORA DO CONTEÚDO:
divTransparente.addEventListener('click', () => {
    modal01.classList.add("fade-out");
    modal03.classList.add("fade-out");
    setTimeout(function () {
        modal01.classList.remove("fade-out");
        modal03.classList.remove("fade-out");
        divTransparente.style.display = 'none'
        modal01.close()
        modal03.close()
    }, 400);
});

d2.addEventListener('click', () => {
    d2.style.display = 'none';
    modal02.close()
});

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

