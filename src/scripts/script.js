window.addEventListener('load', loadEvents)

function loadEvents() {
    const submit = document.querySelector('.submit')
    const valores = document.querySelectorAll('.valores>span')


    let resultado




    //AddEventListiners adicionados a todos os objetos valores
    valores.forEach(valor => {
        valor.addEventListener('click', function(event) {
            resultado = Number(valor.innerText)
        })
    })


    // Ao clicar o botão submit verificar se há alguma opção selecionada se não, não passar para a proxima etapa
    // Necessita de correção, não fuciona
    submit.addEventListener('click', () => {
        (resultado !== '') ? SegundaTela(): msg("How do you say to us?")
    })


}

function msg(p = "") {
    window.confirm("")

}

// Estudar a estrutura dessa função mais a fundo 
// https://pt.stackoverflow.com/questions/189492/como-fazer-com-que-quando-o-bot%C3%A3o-seja-pressionado-ele-continua-com-a-cor-difere
function toggleButtons(element, elements) {
    for (let i = 0; elements.length > i; i++) {
        let fn = elements[i] == element ? "add" : "remove"
        elements[i].classList[fn]('.selecionado')
    }
}

function SegundaTela() {
    const modal = document.querySelector("#thankYou")
    modal.classList.add('ativo')
}