/* Loading */
const Loading = document.querySelector('#loading');

setTimeout(() => {
    Loading.style.opacity = '0';
}, "2000")

setTimeout(() => {
    Loading.style.display = 'none';
}, "2300")

const Page1 = document.querySelector('#page1');
function HiddenPage1(){
    Page1.style.display = 'none';
}

const tittle = document.querySelector('#tittle');
const button = document.querySelector('#button');
var y=0
function Page2(){
    switch (y) {
        case 0:
            tittle.innerText = 'Que teimosa! Não aperte, você vai se arrepender!!'
            y++;
            break;
        case 1:
            tittle.innerText = 'Eu já falei pra ti, por que insiste?'
            y++;
            break;
        case 2:
            tittle.innerText = 'Não aperta!!!! Eu já te falei!'
            y++;
            break;
        case 3:
            tittle.innerText = 'Insistente você hein'
            y++;
            break;
        case 4:
            tittle.innerText = 'Por que ta tão curiosa assim?'
            y++;
            break;
        case 5:
            tittle.innerText = 'Estou avisando...'
            y++;
            break;
        case 6:
            tittle.innerText = 'Você quer mesmo ir até o final com isso?'
            y++;
            break;
        case 7:
            tittle.innerText = 'Se tem certeza?'
            y++;
            break;
        case 8:
            tittle.innerText = 'Absoluta??'
            y++;
            break;
        case 9:
            tittle.innerText = 'Olha...'
            y++;
            break;
        case 10:
            tittle.innerText = 'Você que sabe..'
            y++;
            break;
        case 11:
            tittle.innerText = 'Tabom'
            y++;
            break;
        case 12:
            tittle.innerText = 'Você venceu'
            y++;
            break;
        case 13:
            tittle.innerText = '...'
            button.innerText = 'Me aperte'
            y++;
            break;
        case 14:
            tittle.innerText = '??'
            y++;
            break;
        case 15:
            tittle.innerText = 'Mesmo pedindo para apertar você aperta >:(!!'
            y++;
            break;
        case 16:
            tittle.innerText = 'Pelo visto você não vai parar mesmo'
            y++;
            break;
        case 17:
            tittle.innerText = 'Então não tenho muito o que fazer...'
            y++;
            break;
        case 18:
            tittle.innerText = 'Você venceu, pode apertar..'
            y++;
            break;
        case 19:
            tittle.innerText = 'Espero que não se arrependa'
            y++;
            break;
        case 20:
            HiddenPage2();
            break;
    }
}

const cartinha = document.querySelector("#cartinha")

const page2 = document.querySelector('#page2');
function HiddenPage2(){
    cartinha.style.display = 'flex';
    setTimeout(() => {
        cartinha.style.opacity = '1';
    }, "400")
    setTimeout(() => {
        page2.style.display = 'none';
    }, "1500")
    setTimeout(() => {
        cartinha.style.opacity = '0';
    }, "2000")
    
    setTimeout(() => {
        cartinha.style.display = 'none';
        LoadPedido();
    }, "2300")
}

const amor = document.querySelector("#amor")
const pedido = document.querySelector("#pedido")
const Yes = document.querySelector("#Yes")
const No = document.querySelector("#No")
const Yesss = document.querySelector("#Yesss")

function LoadPedido() {
    amor.style.opacity= 1
    setTimeout(() => {
        pedido.style.opacity = 1;
    }, "1500")
    setTimeout(() => {
        Yes.style.opacity = 1;
    }, "3500")
    setTimeout(() => {
        No.style.opacity = 1;
    }, "4500")
    setTimeout(() => {
        Yesss.style.opacity = 1;
    }, "5500")
}




/* Pedido */
const NoButton = document.querySelector("#No");
const Container = document.querySelector('.container')
const Box = document.querySelector('.box')

var x = 0;

const getRandomY = () => {
    min = Math.ceil(0);
    max = Math.floor((Container.clientHeight))
    return Math.floor(Math.random() * (max - min) + min)
}

const getRandomX = () => {
    min = Math.ceil(0);
    max = Math.floor((Container.clientWidth))
    return Math.floor(Math.random() * (max - min) + min)
}

const NoClick = () => {
    x= x + 1;
    NoButton.classList.add("absoluto")
    NoButton.style.top=`${getRandomY()}px`;
    NoButton.style.right=`${getRandomX()}px`;
    if(x == 4){
        alert("Que não oq, ta achando que vou desistir fácil?? Se reclamar vamo até casar fia kkkkk")
    }
    if(x == 5){
        alert("Vai precisar apertar mais vezes hein")
    }
    if(x == 8){
        alert("Eu disse pra darmos um tempo, e não que terminamos, pode voltando pra mim >:(")
    }
    if(x == 10){
        alert("..Era trolagem, foi mal, é q meu cll molho e programou os bagui sozinho kkjkjk doideira (não era n, te amo volta amo eu mudei kkjkk)")
    }
    if(x == 13){
        alert("Duvido apertar mais vezes")
    }
    if(x == 17){
        NoButton.innerText = "SIMM"
    }
    if(x == 18){
        alert("IHHHH APERTOUU!! Agora não tem opcção, já aceitou!")
    }
    if(x == 19){
        alert("Apertou de novo?? Quer casar se fala")
    }
    if(x == 19){
        alert("Tamo casado então, pode beijar o noivo!")
    }
    if(x == 1000){
        alert("Eu te falei, ainda sim eu te amo meu amor :3")
    }
}

const pagePedido = document.querySelector("#pagePedido")
const DEUCERTOO = document.querySelector("#DEUCERTOO")
function YesClick(){
    document.querySelector("body").style.height = "auto";
    DEUCERTOO.style.display = "flex";
    pagePedido.style.opacity = 0;
}