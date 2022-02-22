const button = document.querySelector(".button")
buttonOn = false

button.addEventListener("click", () => {
	if (!buttonOn){
		buttonOn = true
		chrome.tabs.executeScript({
			file: "Content.js"
		})
	}
})