let warningQueue = [];
let currentWarning = null;
let alertElement;

// Wait for the DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    // Construct the alert element
    alertElement = document.createElement('div');
    alertElement.id = 'warning';
    alertElement.innerHTML = '<div id="warning-content"></div>';
    document.body.appendChild(alertElement);

    // Apply styles
    applyStyles();
});

function applyStyles() {
    const warningStyle = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: #333;
        padding: 15px;
        text-align: center;
        transition: top 0.5s ease-in-out;
        z-index: 9998;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-style: normal;
        padding: 10px;
    `;
    
    const contentStyle = `
        white-space: normal;
        word-wrap: break-word;
        padding-right: 20px;  
    `;

    alertElement.style.cssText = warningStyle;
    document.getElementById('warning-content').style.cssText = contentStyle;

    // Load Madimi One font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Madimi+One&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}

function showNextAlert() {
    if (warningQueue.length > 0) {
        currentWarning = warningQueue.shift();
        let warning = document.getElementById("warning");
        let warningContent = document.getElementById("warning-content");

        // Set the warning message
        warningContent.innerHTML = currentWarning.message;

        // Set the background gradient
        if (currentWarning.kind == 'negative') {
            warning.style.background = 'radial-gradient(circle at center, #ffdd00 25%, #ffac00 25%, #ffbf00 50%, #ff9d00 50%, #ff8400 75%, #ff6a00 75%, #ff6a00 100%, #ff2800 100%)';
        } else if (currentWarning.kind == 'positive') {
            warning.style.background = 'radial-gradient(circle at center, #6aff50 25%, #9aff88 25%, #2bff71 50%, #6eff9e 50%, #66ffc2 75%, #89ffd0 75%, #64ffe0 100%, #aeffef 100%)';
        }

        // Set the initial top position to -100%
        warning.style.top = "-100%";

        // Show the warning by sliding it down
        warning.style.display = "block";
        setTimeout(() => {
            warning.style.top = "0";
        }, 100);

        // Calculate the display duration based on the message length
        const messageLength = currentWarning.message.length;
        const displayDuration = 1500 + (messageLength * 60); // 60ms per character + 1.5s base duration

        // Set a timeout to hide the warning after the calculated duration
        currentWarning.timeoutId = setTimeout(() => {
            slideUp();
        }, displayDuration);
    }
}

function slideUp() {
    let warning = document.getElementById("warning");
    warning.style.top = "-100%";
    setTimeout(() => {
        warning.style.display = "none";
        currentWarning = null;
        showNextAlert();
    }, 500);
}

function showAlert(message, kind = 'negative') {
    warningQueue.push({ message, kind });
    if (!currentWarning) {
        showNextAlert();
    }
}