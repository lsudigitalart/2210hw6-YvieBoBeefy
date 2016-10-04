var direction = 1;
var speed = 5;

//decor
var roset;
var roseb;
var rosel;
var roser;
var backp;

//gargoyles
var gar;
var gar2;

//my waifu
var Her

//basic accessories
var ban;

var bow;

var para;
  var px = 100;
  var py = 0;

//some rad tea sets
var tea1;
  var tx1 = 416;
  var ty1 = 800;

var tea2;
  var tx2 = 516;
  var ty2 = 600;

var tea3;
  var tx3 = 100;
  var ty3 = 100;

//doki doki
var heart;
  var hh = 200;
  var hw = 200;
  var hx = 150;
  var hy = 200;

var sparks;
var bow2;
    bx1 = 300;
    by1 = 300;
    bx2 = 200;
    by2 = 900;
    bx3 = 700;
    by3 = 700;

var circle;


function preload() {
  gar = loadImage("img/gargoyle.png");
  gar2 = loadImage("img/gargoyle2.png");
  Her = loadImage("img/Helena.png");
  ban = loadImage("img/banner.png");
  bow = loadImage("img/bow.gif");
  para = loadImage("img/transparent_parasol.png")
  tea1 = loadImage("img/tea1.png")
  tea2 = loadImage("img/tea2.png")
  tea3 = loadImage("img/tea3.png")
  heart = loadImage("img/hearts.gif")
  sparks = loadImage("img/sparkles.gif")
  bow2 = loadImage("img/giphy.gif")
  circle = loadImage("img/circle.png")

  //decor
  backp = loadImage("img/floral.png")

}

function setup() {
createCanvas(816, 1056);
  background(235, 190, 224);

  textFont("Indie Flower");
}

function draw() {
  background(235, 190, 224, 60);

  ty1 += speed * direction;
  ty2 += speed * direction;
  ty3 += speed * direction;
  py += speed * direction;
  by1 += speed * direction;
  by2 += speed * direction;
  by3 += speed * direction;

  //background
  image(backp, width/2-408, height/2-530, 816, 1065);
  image(circle, width/2-400, 30, 800, 800);

  //falling items
  image(para, px, py, 400, 200);
  image(tea1, tx1, ty1, 200, 110);
  image(tea2, tx2, ty2, 200, 110);
  image(tea3, tx3, ty3, 200, 110);
  image(bow2, bx1, by1, 100, 100);
  image(bow2, bx2, by2, 100, 100);
  image(bow2, bx3, by3, 100, 100);
  //falling items

  //stationary pieces.
  image(Her, width/2-120, height/2-410, 400, 880);
  image(ban, width/2-300, 1056-400, 600, 400);
  image(gar, 816-202, 1056-400, 200, 400);
  image(gar2, 0, 1056-400, 200, 400);
  image(bow, 816-154, 1056-300, 120, 100);
  image(bow, 0+40, 1056-300, 120, 100);
  image(sparks, width/2-200, height/2-200, 400, 400);
  image(sparks, width/2-200, height/2-400, 400, 400);

  //decor



  //scaled hearts
push();
imageMode(CENTER);
noCursor()
  image(heart, mouseX, mouseY, hw, hh);
pop();
  if(by1 > 1056){
    direction = +direction
    bx1 = random(-50, 816);
    by1 = -50;
  }

  if(by2 > 1056){
    direction = +direction
    bx2 = random(-50, 816);
    by2 = -50;
  }

  if(by3 > 1056){
    direction = +direction
    bx3 = random(-50, 816);
    by3 = -50;
  }

  if((ty1 > 1056)){
    direction = +direction
    tx1 = random(-50, 816);
    ty1 = -50;
  }

  if((ty2 > 1056)){
    direction = +direction
    tx2 = random(-50, 816);
    ty2 = -50;
  }

  if(ty3 > 1056){
    direction = +direction
    tx3 = random(-50, 816);
    ty3 = -50;
  }

  if(py > 1056){
    direction = +direction
    px = random(-50, 816);
    py = -150
  }

  if (mouseIsPressed){
    hh += 50;
    hw += 50;
  } else {
    hh = 200;
    hw = 200;
    }

textSize(60);
  fill(0);
    text("DO IT FOR HER.", width/2-200, 1056-290);
}
