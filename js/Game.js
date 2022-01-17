class Game {
  constructor() {}

//ler o gameState apenas com getState , aula c37
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  //atualize o game.js


  //depois de criar as variaveis e a matriz de carros, crie um método start
  
    //criar os sprites dos carros
    //o sprite deve ficar próximo ao centro da tela na direção x
   

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }


  //Escrever um método PLAY para exibir os terrenos depois que receber as informações
  
    //obter informações do banco de dados
  
    //Mostrar a pista conforme o carro vai se movendo
  
  
}
