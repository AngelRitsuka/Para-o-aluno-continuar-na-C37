var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
//criar 2 sprites de carros e uma matriz
var allPlayers, car1, car2;
var cars = [];

function preload() {
  //já precarregadas:
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/pista.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
 //ler o estado do jogo antes de ler o formulário 
  game = new Game();
  game.getState();
  game.start();
  //agora vá nas classes form e play e crie um novo objeto
}

function draw() {
  background(backgroundImage);
  //se termos 2 jogadores comece o jogo, se não deixe o estado vazio, para continuar no WAIT
}
//agora vá para GAME.JS criar um play lá, para conseguir mostrar a pista e os carros na corrida

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
