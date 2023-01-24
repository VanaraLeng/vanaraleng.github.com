//eslint
var index = 0;
var inputText = "";
var timer = null;

window.onload = onloadFunction;

function onloadFunction() { 
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const animation = document.getElementById("animation");
    const fontSize = document.getElementById("fontsize");
    const textArea = document.getElementById("text-area");
    const turbo = document.getElementById("turbo");
    
    startButton.onclick = function() {
        startButton.disabled = true;
        stopButton.disabled = false;

        startAnimation();

        // Backup input text
        inputText = textArea.value;
    };

    stopButton.onclick = function() {
        stopButton.disabled = true;
        startButton.disabled = false;
        if (timer != null) {
            clearInterval(timer);
        }

        // Inset input text
        textArea.value = inputText;
    };

    fontSize.onchange = function() {
        textArea.className = "text" + fontSize.value;
    };

    animation.onchange = function() {
        if (timer != null) {
            clearInterval(timer);
            
            // If timer is running
            if (startButton.disabled) {
                startAnimation();
            }
        }
    };

    turbo.onchange = function() {
        if (timer != null) {
            clearInterval(timer);
            startAnimation();
        }
        
    };
}

function startAnimation() {
    const animationName = document.getElementById("animation").value;
    const turbo = document.getElementById("turbo");
    const animation = ANIMATIONS[animationName];

    const frames = animation.split("=====\n");

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
    document.getElementById("text-area").value = frames[index];
}