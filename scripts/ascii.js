var index = 0;
var inputText = "";
var frames = [];
var timer = null;
var isTurbo = false;

window.onload = onloadFunction;

function onloadFunction() { 
    let startButton = document.getElementById("start");
    let stopButton = document.getElementById("stop");
    let animation = document.getElementById("animation");
    let fontSize = document.getElementById("fontsize");
    let textArea = document.getElementById("text-area");
    let turbo = document.getElementById("turbo");
    

    startButton.onclick = () => {
        startButton.disabled = true;
        stopButton.disabled = false;

        startAnimation()

        // Backup input text
        inputText = textArea.value;
    }

    stopButton.onclick = () => {
        stopButton.disabled = true;
        startButton.disabled = false;
        clearTimer();

        // Inset input text
        textArea.value = inputText;
    }

    fontSize.onchange = () => {
        textArea.className = "text" + fontSize.value;
    }

    animation.onchange = () => {
        if (timer != null) {
            clearInterval(timer);
            startAnimation();
        }
    }

    turbo.onchange = () => {
        if (timer != null) {
            clearInterval(timer);
            startAnimation();
        }
        
    }
}

function startAnimation() {
    let animationName = document.getElementById("animation").value;
    let turbo = document.getElementById("turbo");

    switch (animationName) {
        case "Exercise":  animation = EXERCISE; break;
        case "Juggler" : animation = JUGGLER; break;
        case "Bike" : animation = BIKE; break;
        case "Dive" : animation = DIVE; break;
        default: animation = BLANK; break;

    }

    let frames = animation.split("=====\n");

    if (turbo.checked) {
        timer = setInterval(animate, 50, frames);
    } else {
        timer = setInterval(animate, 250, frames);
    }

}

function animate(frames) { 
    index++;
    if (index >= frames.length) {
        index = 0; // reset index
    }
    document.getElementById("text-area").value = frames[index]
}