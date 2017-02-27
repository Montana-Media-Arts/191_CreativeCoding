
var count = 0;

function setup() {
  createCanvas(400,400);
  frameRate(2);
}

function draw() {
  background(255);
  textSize(36);


  text(count, 10, 50);

  // relational operators
  // Two equal signs checks value, independent of type
  // (i.e. this is true)
  if ( true == 1 ) {
    text("Everything is awesome", 40, 40);
  } else {
    ellipse(200, 200, count*4, count*4);
  }

  // three equal signs, checks value AND type
  // (i.e. this is "not true")
  if ( true === 1 ) {
    text("Everything is awesome", 40, 40);
  } else {
    ellipse(200, 200, count*4, count*4);
  }
  // count++;


}


/*
What other relational operators are there?

'<' -> less than
'>' -> greater than
'<=' -> less than or equal
'<=' -> greater than or equal
'==' -> is equal
'===' -> is equal and same type

 */
