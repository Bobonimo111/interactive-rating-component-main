window.addEventListener('load', loadEvents)

function loadEvents() {
    const submit = document.querySelector('.submit')
    const valores = document.querySelectorAll('.valores>span')


    var selectedMsg
    var action


    // for () {
    //     logs(key)
    // }
    //AddEventListiners adicionados a todos os objetos valores
    // valores.forEach(valor => {
    //     valor.addEventListener('click', function() {
    //         action = Number(valor.innerText) !== '' ? true : false;
    //         selectedMsg = `You selected ${valor.innerText} out of 5`

    //         logs(valor.innerText, action, selectedMsg)

    //     })

    // })
    for (const key of valores.keys()) {
        console.log(key)
        valores[key].addEventListener('click', function() {

            action = Number(valores[key].innerText) !== '' ? true : false;
            selectedMsg = `You selected ${valores[key].innerText} out of 5`

            logs(valores[key].innerText, action, selectedMsg)




            for (const i of valores.keys()) {
                valores[i].classList.contains('primario') ? valores[i].classList.remove('primario') : false
                valores[i].classList.contains('secundario') ? valores[i].classList.remove('secundario') : console.log()

            }

            key > 0 ? (toggleButtonPrimario(valores[key]), toggleButtonSecundario(valores[key - 1])) : toggleButtonPrimario(valores[key])



        })
    }


    // Ao clicar o botão submit verificar se há alguma opção selecionada se não, não passar para a proxima etapa

    submit.addEventListener('click', function() {
        action ? SegundaTela(selectedMsg) : window.alert("how do you say to us?")

    })


}

function msg(p = "") {
    window.confirm("")
}


// Estudar a estrutura dessa função mais a fundo 
// https://pt.stackoverflow.com/questions/189492/como-fazer-com-que-quando-o-bot%C3%A3o-seja-pressionado-ele-continua-com-a-cor-difere



function resetButtons(...buttons) {
    buttons.map(x => (x.classList.remove('primario'), x.classList.remove("secundario")))
}

function toggleButtonPrimario(button) {
    button.classList.add('primario')
}

function toggleButtonSecundario(button) {
    button.classList.add('secundario')
}

function SegundaTela(text) {
    const modal = document.querySelector("#thankYou")
    const selected = document.querySelector(".select")
    var paragrafo = document.createElement('p')
    modal.classList.add('ativo')
    paragrafo.innerHTML = text
    selected.append(paragrafo)

    // selected.innerHTML = "<p>"+tex+"<p>"

}

function logs(...valores) {
    valores.forEach(valor => {
        console.log(valor)
    })

}

// const valores = document.querySelectorAll('.valores>span')
// valores[1].classList.remove