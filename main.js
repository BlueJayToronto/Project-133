x=0;
y=0;
draw_circle="";
draw_rect="";
screen_width:"";
screen_height:"";
apple:empty;
speak_data: empty:
to_number:empty;

function preload {
    "apple.png";

}


var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start()
}

function setup() {
    canvas=createCanvas(150,150);
    screenwidth=window.innerWidth;
  }

function canvas.position() {
    width:100;
    height:50;
}
function draw() {
    if(draw_apple == "set")
    {
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle= "";
    }

    if(draw_rect == "set")
    {
        recognition(x,y,70,50)
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect= "";
    }
  }

function speak () {
    document.getElementById("status").innerHTML = "The Speech has been recognized as:"+content;
}