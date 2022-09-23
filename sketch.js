//variaveis da bolinha
let xBolinha = 200;
let yBolinha = 200;
let diametro = 20;
let raio= diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variaveis da raquete
let xRaquete =5;
let yRaquete =150;
let raqueteComprimento =10;
let raqueteAltura =90;


function setup() {
  createCanvas(600, 400);
}

function draw(){   
  background(0);
  mostraBolinha();
 // movimentaBolinha();
  verificaColisaoBorda();
  rect( 5, 150,10, 90); 
  
   }
  
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
  if( xBolinha> width || xBolinha<0 ){ 
    velocidadeXBolinha *=-1;
  }
   if (yBolinha> height|| yBolinha<0){
     velocidadeYBolinha *= -1;
   }
  

