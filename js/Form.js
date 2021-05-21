class Form {

  constructor() {
    this.button = createButton('Play');
    this.title = createElement('h2');

  }
 

  display(){
    this.title.html("MineCraft");
    this.title.position(displayWidth/2 - 50, 0);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
  
  }
}
