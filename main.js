//função para clicar na imagem e mostrar o texto referente ao animal da foto
function atribuirTexto(){
    const listaImg = document.querySelectorAll('.animais img')
    const listaTxt = document.querySelectorAll('.animais_txt section')
    listaTxt[0].classList.add('ativo')
    if(listaImg.length){
        function puxarTxt (event) {
            const animal = event.target.classList[0]
            listaTxt.forEach((txt) => {
                if(animal === txt.classList[0]){
                    listaTxt.forEach((txt)=> txt.classList.remove('ativo'))
                    txt.classList.add('ativo')
                }
            })
        }

        listaImg.forEach((img) => {
            img.addEventListener('click', puxarTxt)
        })
    }
}

//função para clicar nas perguntas do faq e mostrar as respostas
function deslizarTexto(){
    const listaTxt = document.querySelectorAll('.js_lista dt')
    if(listaTxt.length){
        listaTxt[0].classList.add('ativo')
        listaTxt[0].nextElementSibling.classList = 'ativo'
        console.log(listaTxt[0])
        function mostrarDd (){
            console.log(this)
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }

        listaTxt.forEach((dt) => {
            dt.addEventListener('click', mostrarDd)
        })
    }
}

//função para fazer scroll ate a section escolhida no nav
function autoScroll (){
    function navegar (event){
    const textoElemento = this.innerText
    const listaSection = document.querySelectorAll('section[id^="Js"]')
        event.preventDefault()
        listaSection.forEach((section) => {   
            const sectionCerta = section.classList[1].toLocaleUpperCase()
            if(sectionCerta === textoElemento){
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
        })  
    }
    const listaLink = document.querySelectorAll('a[href^="#"]')
    listaLink.forEach((link, index) => {
    link.addEventListener('click', navegar)
    })
}

autoScroll()
deslizarTexto()
atribuirTexto()