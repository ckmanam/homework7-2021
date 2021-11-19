var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

var slider = document.getElementById("slider");
var output = document.getElementById("volume");

slider.oninput = function() {
	vid.volume = (this.value / 100 ) 
	output.innerHTML = this.value + "%";
}

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	output.innerHTML = slider.value + "%";
	
});

var vid = document.getElementById("player1"); 

var duration = vid.duration

var button_play = document.querySelector("#play");

button_play.addEventListener("click", function onclick(event) {
vid.play()
});	

var button_pause = document.querySelector("#pause");

button_pause.addEventListener("click", function onclick(event) {
vid.pause()
});	

var button_slow = document.querySelector("#slower")

button_slow.addEventListener("click", function onclick(event) {
vid.playbackRate = (vid.playbackRate - .05)
console.log(vid.playbackRate)
});	

var button_speed = document.querySelector("#faster")

button_speed.addEventListener("click", function onclick(event) {
vid.playbackRate = (vid.playbackRate + .05)
console.log(vid.playbackRate)
});	

// ---

var button_skip = document.querySelector("#skip");

button_skip.addEventListener("click", function onclick(event) {
if ((vid.currentTime + 15) > vid.duration){
	vid.currentTime = 0
} else {
	vid.currentTime=(vid.currentTime + 15);
}
});	

var button_mute = document.querySelector("#mute");

button_mute.addEventListener("click", function onclick(event) {
if (document.getElementById("mute").innerHTML == "Mute"){
	vid.muted = true;
	document.getElementById("mute").innerHTML = "Unmute"

} else{
	vid.muted = false;
	document.getElementById("mute").innerHTML = "Mute"
}
});	

var add_vintage = document.querySelector("#vintage");

add_vintage.addEventListener("click", function onclick(event) {
vid.classList.add("oldSchool");
});	

var remove_vintage = document.querySelector("#orig");

remove_vintage.addEventListener("click", function onclick(event) {
	vid.classList.remove("oldSchool");
});	