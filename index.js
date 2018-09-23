function shout(string){
  return string.toUpperCase( );
}

function whisper(string){
  return string.toLowerCase( );
}

function logShout(string){
  console.log(string.toUpperCase( ));
}

function logWhisper(string){
  console.log(string.toLowerCase( ));
}

function sayHiToGrandma(string){
  var one = "I can't hear you!"
  var two = "YES INDEED!"
  var three = "I love you, too."

  if (string.toLowerCase(string) === string) {
    return one;
  }

  else if (string.toUpperCase(string)) === string) {
    return two;
  }

  else if (string === "I love you grandma.") {
    return three;
  }
}