var pause = document.getElementById("pause")
var play = document.getElementById("play")
var audio = document.getElementById("audio")
var elapsed = document.getElementById("progress-bar");

function audioPlayer() {
    if (pause.classList.contains("audio-not-active")) {
        audio.play()
        pause.classList.remove("audio-not-active")
        play.classList.add("audio-not-active")
    }
    else if (play.classList.contains("audio-not-active")) {
        audio.pause()
        pause.classList.add("audio-not-active")
        play.classList.remove("audio-not-active")
    }
}

setInterval(function(){
    var percentage = audio.currentTime / audio.duration;
    var width = (percentage * 100);
    elapsed.style.width = width + "%"
    
    if (width == 100){
        audio.pause()
        play.classList.remove("audio-not-active")
        pause.classList.add("audio-not-active")
    }
}, 33);