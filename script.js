function setup() {
  createCanvas(700, 700);
  var str = "Hello";

}

function draw() {

  background('green');

  rect(685,mouseY,10,100);
  rect(10,200,10,100);
  rect(350,350,10,10, 50);

  line(360,700,350,0);
  text(mouseX + "," + mouseY , mouseX , mouseY);


  rect(250,5,200,100);
  text(mouseX + "," + mouseY , 327 ,80);
  text("Mouse X and Y values", 290 ,30);
  text("👇", 343 ,50);
window.addEventListener('scroll' , ( )  => {

  console.log("rfgsdrfgsrtf");

});








}
