


function setup(){
   canvas = createCanvas(displayWidth,displayHeight);
   database = firebase.database();
   input = createInput("Voters Id ");
   button = createButton("Start");
   title = createElement('h2')
   title.html("Survey App");
   input.position(570,140);
   button.position(630,180);
   title.position(595,0);
  
   

 button.mousePressed(function(){
    input.hide();
    button.hide();
    title.hide();
    greeting = createElement('h3');
    greeting.html("Hello!! " + name);
    greeting.position(640,60);
    input.position(630,200);
    name = input.value();
    voteCount+=1;
    voteCount.update(name);

  });
}

function draw(){
input.display();
button.display();
title.display();
text.display();
greeting.display();

text("Q1.Here is a survey app do you like it?",600,400);
textSize(15);

}

