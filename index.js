const forms = document.getElementById("formulario");
const botao = document.getElementById("botao");
forms.addEventListener("submit",(a)=>{
    a.preventDefault();
    botao.textContent = "Mensagem enviada com sucesso";
    setTimeout(()=>{
        location.reload()
    },3000)
});

