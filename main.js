const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function (event){
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const comoNosConheceu = document.getElementById("comonosconheceu").value
    const mensagem = document.getElementById("mensagem").value

    if(telefone.trim() === ""){
        alert("Digite seu nome")
        return
    }

    const textoWhatsapp =
    `
    Ola! Gostaria de concorrer a esse iphone 
    Nome:${nome}
    E-mail:${email}
    Telefone:${telefone}
    Como nos conheceu:${comoNosConheceu}
    Observações:${mensagem}
    `
    const mensagemCodificada = encodeURIComponent(textoWhatsapp)

    const numeroWhatsapp = "5511914771165"

    const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada

    window.location.href = link
})
