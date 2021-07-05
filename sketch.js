var umbrella,umbrella_img;
var drops;
var thunderbolt1,hunderbolt2,hunderbolt3,hunderbolt4,thbolt;

function preload(){
    umbrella_img = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png")
    thunderbolt1 = loadImage("1.png")
    thunderbolt2 = loadImage("2.png")
    thunderbolt3 = loadImage("3.png")
    thunderbolt4 = loadImage("4.png")
}

function setup(){
    canvas = createCanvas(400,400)
    umbrella = new Umbrella(150,300)
    
}

function draw(){
    umbrella.display();
}   

