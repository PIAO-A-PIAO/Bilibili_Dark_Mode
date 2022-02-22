var dark = function() {
html = document.querySelector("html")
html.style.filter = "invert(1) hue-rotate(180deg)"


var all_dark = function() {
	toChange = document.querySelectorAll("img, video, bwp-video")
	toChange.forEach((i) => {
		i.style.filter = "invert(1) hue-rotate(180deg)"
	})
	manga_back()
	frame_back()
}

var end_back = function(){
	end = document.getElementsByClassName("bilibili-player-ending-panel-box-recommend-img")
	for (i=0; i<end.length; i++) {
		end[i].style.filter = "invert(1) hue-rotate(180deg)"
	}
}

var two_all_dark = function(){
	all_dark()
	setTimeout(all_dark, 700)
}

var frame_back = function(){
	frame = document.getElementsByClassName("van-framepreview")
	for (i=0; i<frame.length; i++) {
		frame[i].style.filter = "invert(1) hue-rotate(180deg)"
	}
}

var manga_back = function(){
	manga = document.getElementsByClassName("manga-left-item-img")
	for (i=0; i<manga.length; i++) {
		manga[i].style.filter = "invert(1) hue-rotate(180deg)"
	}
}

var danmu_back = function(){
	danmu = document.getElementsByClassName("b-danmaku")
	for (i=0; i<danmu.length; i++) {
		danmu[i].style.filter = "invert(1) hue-rotate(180deg)"
	}
	panel = document.getElementsByClassName("bui-color-picker")
	if (panel.length > 0){panel[0].style.filter = "invert(1) hue-rotate(180deg)"}
}


var monitor = function(){
	danmu_back()
	end_back()
}


setTimeout(two_all_dark, 50)
setInterval(monitor, 500)


window.addEventListener("scroll", two_all_dark)
window.addEventListener("click", two_all_dark)
window.addEventListener("mouseover", two_all_dark)

}

dark()