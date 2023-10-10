let elementsQuestions = document.querySelectorAll(".duvida")

elementsQuestions.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle("ativa")
    })
})