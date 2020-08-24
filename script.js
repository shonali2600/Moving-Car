var audio = document.createElement('audio');
audio.setAttribute('src','./resources/sound.mp3');
audio.loop=true;
audio.play();



// Add *.autoplay = true; before you load.

//  var source = "./resources/sound.mp3"
//  var audio = document.createElement("audio");
//  //
//  audio.autoplay = true;
//  //
//  audio.load()
//  audio.addEventListener("load", function() { 
//      audio.play(); 
//  }, true);
//  audio.src = source;