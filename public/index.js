var app = function() {
    var canvas = document.getElementById("main-canvas");
    var context = canvas.getContext("2d");
    var length = 5;
    var cornerRadius = 100;
    var plotX = 10;
    var plotY = 10;

    var drawLine = function(direction) {
        context.beginPath();
        context.moveTo(plotX, plotY);
        if (direction == "37" && plotX > 0) {plotX -= length};
        if (direction == "38" && plotY > 0) {plotY -= length};
        if (direction == "39" && plotX < 930) {plotX += length};
        if (direction == "40" && plotY < 465) {plotY += length};
        context.lineTo(plotX, plotY);
        context.lineWidth = 5;
        context.stroke();
    };

    window.addEventListener("keydown", function(event) {
        drawLine(event.keyCode);
    }, true);

    var resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        // plotX = 0;
        // plotY = 0;
    });


}

window.addEventListener("load", app);
