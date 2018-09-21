/**
 * 
 * @param {*} e 
 */
function playsound(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);

  if(!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

/**
 * 
 * @param {*} e 
 */
function remove(e) {
  if(e.propertyName !== "transform") {
    return;
  }

  e.target.classList.remove("playing");
}

/**
 * 
 */
function initJS_01(){
  window.addEventListener("keydown", playsound);
  window.addEventListener("transitionend", remove);
}


initJS_01();



