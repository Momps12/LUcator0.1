if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    const startButton = document.getElementById('strbtn')
    const outputTextarea = document.getElementById('output');
    const searchButton = document.getElementById('srchbtn');
    let permissionGranted = false; // Variable to track permission status

    recognition.continuous = true;

    let timeoutId;

    recognition.onstart = function () {
        startButton.disabled = true;
        stopButton.disabled = false;
    };

    recognition.onend = function () {
        startButton.disabled = false;
        stopButton.disabled = true;
    };

    recognition.onresult = function (event) {
        const result = event.results[event.results.length - 1][0].transcript;
        outputTextarea.value = result;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            recognition.stop();
        }, 3000);
    };

    startButton.addEventListener('click', function () {
        if (!permissionGranted) {
          
            permissionGranted = true; 
            recognition.start();
        } else {
            recognition.start();
            clearTimeout(timeoutId); 
            timeoutId = setTimeout(function () {
                recognition.stop();
            }, 2000);
        }
    });

    searchButton.addEventListener('click', function () {
        const searchText = outputTextarea.value;
        console.log("Search for:", searchText);
    });
} else {
    alert("Your browser does not support the Web Speech API. Please use a modern browser.");
}