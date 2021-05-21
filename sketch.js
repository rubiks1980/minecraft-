var form;
var game;
var database;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16
var wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database= firebase.database();

 game = new Game();
 game.getState();
 game.start();

}


function draw(){
background(255);



text(mouseX + " : " + mouseY,mouseX,mouseY);



drawSprites();
}
//