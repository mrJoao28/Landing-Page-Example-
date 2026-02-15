const forms = document.getElementById("formulario");
const botao = document.getElementById("botao");
const images = [`url("images/image1.jpeg")`,`url("images/image2.jpeg`];
const btnRight = document.getElementById("right");
const btnLeft = document.getElementById("left");
const image = document.getElementById("hero");
forms.addEventListener("submit",(a)=>{
    a.preventDefault();
    botao.textContent = "Mensagem enviada com sucesso";
    setTimeout(()=>{
        location.reload()
    },3000)
});
image.style.backgroundImage=images[0]
function direita(){
    if (images.indexOf(image.style.backgroundImage)===images.length){
        image.style.backgroundImage=images[0]
    } else {
        image.style.backgroundImage=images[images.indexOf(image.style.backgroundImage)+1]
    }
}
function esquerda(){
    if (images.indexOf(image.style.backgroundImage)===0){
        image.style.backgroundImage=images[1]
    } else {
        image.style.backgroundImage=images[images.indexOf(image.style.backgroundImage)+1]
    }
}
setTimeout(direita,6000)
