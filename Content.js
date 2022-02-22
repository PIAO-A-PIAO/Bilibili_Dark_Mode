html = document.querySelector("html")
html.style.filter = "invert(1) hue-rotate(180deg)"


function all_dark() {
	toChange = document.querySelectorAll("img, bwp-video")
	toChange.forEach((i) => {
		i.style.filter = "invert(1) hue-rotate(180deg)"
	})
	danmu_back()
	
}

function danmu_back(){
	danmu = document.getElementsByClassName("b-danmaku")
		for (i=0; i<danmu.length; i++) {
			danmu[i].style.filter = "invert(1) hue-rotate(180deg)"
		}
	panel = document.getElementsByClassName("bui-color-picker")
	if (panel.length > 0){panel[0].style.filter = "invert(1) hue-rotate(180deg)"}
}

function touch(){

}

function monitor(){
	danmu_back()
	touch()
}

all_dark()

setInterval(monitor, 500);

window.addEventListener("scroll", () => {
		all_dark()
})

