var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var vermelho;
var verde;
var azul;

function apertou(){

    var circulosVetor = [];
    var coresVetor = [
        '#E3C76B',
        '#B009E8',
        '#5547F5',
        '#F2B138',
        '#F037CB',
    ];

    for(j=0;j<3000;j++) {

        //Criar um objeto do tipo Quadrado e armazenando no vetor
        circulosVetor[j] = new Círculo (Math.random()*100, Math.random()*100, Math.random()*20, coresVetor[Math.floor(Math.random()*5)], Math.random()*10, Math.random()*10);
    }

    console.log(circulosVetor);
    
    function Círculo (posX, posY, tamanho, cor, velX, velY) {

        this.posX = posX;
        this.posY = posY;
        this.tamanho = tamanho;
        this.cor = cor;
        this.velX = velX;
        this.velY = velY;

        this.desenhar = function () {
            c.beginPath();
            c.arc(this.posX,this.posY,5,0, Math.PI*2);
            c.fillStyle = this.cor;
            c.stroke();
            c.fill()
        }

        this.movimentar = function () {
            //Incrementando a posição em 1px
            this.posX = this.posX + this.velX;

            //Se o objeto atingir o limite horizontal positivo, altera sentido de movimento
            if(((this.posX+this.tamanho) >= window.innerWidth) || (this.posX <= 0)) {
                this.velX = -this.velX;
                new Audio("som.mp3").play()
            }

            this.posY = this.posY + this.velY;

            if(((this.posY+this.tamanho) >= window.innerHeight) || (this.posY <= 0)) {
                this.velY = -this.velY;
                new Audio("som.mp3").play()
            }
        }
    }

    function animate () {
        requestAnimationFrame(animate);

        c.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for(b=0;b<circulosVetor.length;b++) {
            circulosVetor[b].desenhar();
            circulosVetor[b].movimentar();
        }
    }

    animate();

    button.innerText = "Não nos responsabilizamos pela sua dor de ouvido.";
}