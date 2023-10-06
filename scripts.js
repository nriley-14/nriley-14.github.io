async function typeText() {
    var sentences = [
        "My Name is Nick Riley",
        "I am a first year computer science major",
        "I am extremely excited to use software to help the community",
    ];
    var fullMsg = "<p class='cursor' onload='typeText()'>";

    for (var i = 0; i <= sentences.length; i++) {
        var text = sentences[i];
        var numBlinks = 2
        ;
        fullMsg += ">"
        document.getElementById("prompt").innerHTML = fullMsg;

        var cursor = true;
        var blinkCount = 0;
        while (true) {
            if (cursor) {
                document.getElementById("prompt").innerHTML = fullMsg + " ";
                cursor = false;
            } else {
                document.getElementById("prompt").innerHTML = fullMsg + "|";
                cursor = true;
            }
            await sleep(300);
            if (blinkCount > numBlinks && i < sentences.length) break;
            blinkCount++;
        }


        for (var j = 0; j <= text.length; j++) {
            document.getElementById("prompt").innerHTML = fullMsg + text.substring(0, j) + "|";
            await sleep(25);
        }
        fullMsg +=  text;
        var cursor = true;
        
        var cursor = true;
        var blinkCount = 0;
        while (true) {
            if (cursor) {
                document.getElementById("prompt").innerHTML = fullMsg + " ";
                cursor = false;
            } else {
                document.getElementById("prompt").innerHTML = fullMsg + "|";
                cursor = true;
            }
            await sleep(300);
            if (blinkCount > numBlinks && i < sentences.length-1) break;
            blinkCount++;
        }





        fullMsg += "</p>" + "<p class='cursor'>";

        document.getElementById("prompt").innerHTML = fullMsg;
    }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


window.onload = typeText;

