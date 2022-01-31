let prato
let bebida
let sobremesa
let precoPrato = 0
let precoBebida = 0
let precoSobremesa = 0
let feitoPrato
let feitoBebida
let feitoSobremesa

function pedidoFeito(){
    let pedidoPronto = feitoBebida + feitoPrato + feitoSobremesa
    let botaoVerde = document.querySelector(".confirmacao")
    if(pedidoPronto === 3 ) {
        botaoVerde.innerHTML = "<p>Fechar pedido</p>"
        botaoVerde.classList.add("verde-botao")
    }
}

function escolherEmpanado(){
    document.querySelector(".empanado").style.borderColor = "green"
    document.querySelector(".parmegiana").style.borderColor = "white"
    document.querySelector(".grelhado").style.borderColor = "white"
    prato = "Empanado"
    precoPrato = 10.00
    feitoPrato = 1 
    pedidoFeito()
}

function escolherParmegiana(){
    document.querySelector(".parmegiana").style.borderColor = "green"
    document.querySelector(".empanado").style.borderColor = "white"
    document.querySelector(".grelhado").style.borderColor = "white"
    prato = "Parmegiana"
    precoPrato = 12.00
    feitoPrato = 1
    pedidoFeito()
}

function escolherGrelhado(){
    document.querySelector(".grelhado").style.borderColor = "green"
    document.querySelector(".empanado").style.borderColor = "white"
    document.querySelector(".parmegiana").style.borderColor = "white"
    prato = "Gelhado"
    precoPrato = 12.00
    feitoPrato = 1
    pedidoFeito()
}

function escolherGuarana(){
    document.querySelector(".guarana").style.borderColor = "green"
    document.querySelector(".coca").style.borderColor = "white"
    document.querySelector(".pepsi").style.borderColor = "white"
    bebida = "Guarana"
    precoBebida = 5.00
    feitoBebida = 1
    pedidoFeito()
}

function escolherCoca(){
    document.querySelector(".coca").style.borderColor = "green"
    document.querySelector(".guarana").style.borderColor = "white"
    document.querySelector(".pepsi").style.borderColor = "white"
    bebida = "Coca"
    precoBebida = 6.00
    feitoBebida = 1
    pedidoFeito()
}

function escolherPepsi(){
    document.querySelector(".pepsi").style.borderColor = "green"
    document.querySelector(".guarana").style.borderColor = "white"
    document.querySelector(".coca").style.borderColor = "white"
    bebida = "Pepsi"
    precoBebida = 6.00
    feitoBebida = 1
    pedidoFeito()
}

function escolherPudim(){
    document.querySelector(".pudim").style.borderColor = "green"
    document.querySelector(".pave").style.borderColor = "white"
    document.querySelector(".bolo").style.borderColor = "white"
    sobremesa = "Pudim"
    precoSobremesa = 8.00
    feitoSobremesa = 1
    pedidoFeito()
}

function escolherPave(){
    document.querySelector(".pave").style.borderColor = "green"
    document.querySelector(".pudim").style.borderColor = "white"
    document.querySelector(".bolo").style.borderColor = "white"
    sobremesa = "Pave"
    precoSobremesa = 10.00
    feitoSobremesa = 1
    pedidoFeito()
}

function escolherBolo(){
    document.querySelector(".bolo").style.borderColor = "green"
    document.querySelector(".pudim").style.borderColor = "white"
    document.querySelector(".pave").style.borderColor = "white"
    sobremesa = "Bolo"
    precoSobremesa = 10.00
    feitoSobremesa = 1
    pedidoFeito()
}

function fecharPedido(){
    let pedidoPronto = feitoBebida + feitoPrato + feitoSobremesa
    let preco = precoBebida + precoPrato + precoSobremesa    
    let texto = `Olá, gostaria de fazer o pedido: 
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${preco.toFixed(2)}`

   

    if(pedidoPronto === 3){
        let nome = prompt("qual é o seu nome?")
        let endereco = prompt("qual é o seu endereço?")
        let texto = `Olá, gostaria de fazer o pedido: 
        - Prato: ${prato}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: R$ ${preco.toFixed(2)}
        Nome: ${nome}
        Endereço: ${endereco}`
    window.open(`https://wa.me/5521999999999/?text=${encodeURIComponent(texto)}`)
    }
}