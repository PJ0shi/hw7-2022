var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	video.load();
	

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log(video.volume)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = video.playbackRate - (video.playbackRate * 0.1);
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	video.playbackRate = video.playbackRate + (video.playbackRate * 0.1);
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip Video");
	var new_time = video.currentTime += 10;
	console.log(video.currentTime);
	if (new_time > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = new_time;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute Video");
	if (video.muted == true){
		console.log("in the if statement");
		video.muted = false;
		document.querySelector("#mute").innerText = "Mute";
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerText = "Unmute";
	}
});


document.querySelector("#slider").addEventListener("click", function(){
	console.log("The current value is", video.volume)
	video.volume = this.value/100
	console.log("The current value is", video.volume)
	console.log(document.querySelector("#volume"))
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
});



document.querySelector("#vintage").addEventListener("click", function() {
	console.log("vintage");
	video.classList.add("oldSchool");

});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("orig");
	video.classList.remove("oldSchool");

});
