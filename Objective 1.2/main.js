window.onload =  function () {
    var drawingSurfaceLine = document.getElementById("drawingSurfaceLine");
    var ctxtLine = drawingSurfaceLine.getContext("2d");

    /**
     * A line Draen on the canvas
     */
    ctxtLine.beginPath();
    ctxtLine.moveTo(10, 10);
    ctxtLine.lineTo(225, 350);
    ctxtLine.stroke();

    /**
     * Polyline drawn non the canvas
     */
    var drawingSurfacePolyline = document.getElementById("drawingSurfacePolyline");
    var ctxtPolyline = drawingSurfacePolyline.getContext("2d");
    ctxtPolyline.beginPath();
    ctxtPolyline.moveTo(10, 10);
    ctxtPolyline.lineTo(225, 350);
    ctxtPolyline.lineTo(300, 10);
    ctxtPolyline.lineTo(400, 350);
   

    /**
     * Style Polyline
     */
    ctxtPolyline.lineWidth = 5;
    ctxtPolyline.strokeStyle = '#0f0';

    ctxtPolyline.stroke();
    /**
     *  Drawing arc on the canvas in different color
     */

    var drawingSurfacearc = document.getElementById("drawingSurfacearc");
    var ctxtarc = drawingSurfacearc.getContext("2d");

    ctxtarc.beginPath();
    ctxtarc.arc(150, 100, 75, 0, 2 * Math.PI, false);
    ctxtarc.lineWidth = 25;
    ctxtarc.strokeStyle = '#0f0';
    ctxtarc.stroke();

    ctxtarc.beginPath();
    ctxtarc.arc(450,100,75, 1.5 * Math.PI, 2 * Math.PI, false);
    ctxtarc.lineWidth = 25;
    ctxtarc.strokeStyle = 'blue';
    ctxtarc.stroke();

    ctxtarc.beginPath();
    ctxtarc.arc(150, 300, 75, 1 * Math.PI, 1.5 * Math.PI, false);
    ctxtarc.lineWidth = 25;
    ctxtarc.strokeStyle = '#0ff';
    ctxtarc.stroke();

    ctxtarc.beginPath();
    ctxtarc.arc(450, 300, 75, .5 * Math.PI, 1 * Math.PI, false);
    ctxtarc.lineWidth = 25;
    ctxtarc.strokeStyle = '#f00';
    ctxtarc.stroke();

    /**
     *  Drawing quadratic on the canvas in different color
     */

    var drawingSurfaceQuadratic = document.getElementById("drawingSurfaceQuadratic");
    var ctxtQuadratic = drawingSurfaceQuadratic.getContext("2d");

    ctxtQuadratic.beginPath();
    ctxtQuadratic.moveTo(10, 380);
    ctxtQuadratic.quadraticCurveTo(300,-250, 580, 380)
    ctxtQuadratic.lineWidth = 25;
    ctxtQuadratic.strokeStyle = '#f00';
    ctxtQuadratic.stroke();

      /**
     *  Drawing Bezier curve drawing on a canvas
     */

     var drawingSurfaceBezier = document.getElementById("drawingSurfaceBezier");
     var ctxtBezier = drawingSurfaceBezier.getContext("2d");

     ctxtBezier.beginPath();
     ctxtBezier.moveTo(125, 20);
     ctxtBezier.bezierCurveTo(0, 200, 300, 300, 50, 400);
     ctxtBezier.lineWidth = 5;
     ctxtBezier.strokeStyle = '#f00';
     ctxtBezier.stroke();

        /**
     *  Drawing Custom curve drawing on a canvas
     */

    var drawingSurfaceCustom = document.getElementById("drawingSurfaceCustom");
    var ctxtCustoms = drawingSurfaceCustom.getContext("2d");

    ctxtCustoms.beginPath();
    ctxtCustoms.arc(300, 200, 75, 1.75 * Math.PI, 1.25 * Math.PI, false);
    ctxtCustoms.lineTo(150, 125);
    ctxtCustoms.quadraticCurveTo(300, 0, 450, 125);
    ctxtCustoms.lineTo(353,144);
    ctxtCustoms.strokeStyle = "blue";
    ctxtCustoms.lineCap = "round";
    ctxtCustoms.lineWidth = 10;
    ctxtCustoms.stroke();


    /**
     * A rectangle drawn on the canvas using the rect method
     */


    var drawingSurfaceRect = document.getElementById("drawingSurfaceRect");
    var ctxtRect = drawingSurfaceRect.getContext("2d");
    
    ctxtRect.beginPath();
    ctxtRect.rect(350, 200, 150, 75);
    ctxtRect.stroke();

     
    /**
     *  Using the fill method to color in a complex object
     */

    var drawingSurfaceCustomFill = document.getElementById("drawingSurfaceCustomFill");
    var ctxtCustoms = drawingSurfaceCustomFill.getContext("2d");

    ctxtCustoms.beginPath();
    ctxtCustoms.arc(300, 200, 75, 1.75 * Math.PI, 1.25 * Math.PI, false);
    ctxtCustoms.lineTo(150, 125);
    ctxtCustoms.quadraticCurveTo(300, 0, 450, 125);
    ctxtCustoms.lineTo(353,144);
    ctxtCustoms.strokeStyle = "blue";
    ctxtCustoms.lineCap = "round";
    ctxtCustoms.lineWidth = 10;
    ctxtCustoms.fillStyle = "Green";
    ctxtCustoms.fill();
    ctxtCustoms.stroke();


    /**
     * The <canvas> element colored with a linear gradient
     */
    var drawingSurfaceLinearGradient = document.getElementById("drawingSurfaceLinearGradient");
    var ctxtLinearGradient = drawingSurfaceLinearGradient.getContext("2d");

    ctxtLinearGradient.lineWidth = 3;
    ctxtLinearGradient.rect(0, 0, 600, 400);
    var gradient = ctxtLinearGradient.createLinearGradient(150, 150, 200, 125);
    gradient.addColorStop(0, "Blue");
    gradient.addColorStop(0.5, "Red");
    gradient.addColorStop(1, "White");
    ctxtLinearGradient.fillStyle = gradient;
    ctxtLinearGradient.fill();
    ctxtLinearGradient.stroke();
     

    /**
     * A readial gradient colored on a canvas
     */
    
    var drawingSurfaceReadialGradient = document.getElementById("drawingSurfaceReadialGradient");
    var ctxtReadialGradient = drawingSurfaceReadialGradient.getContext("2d"); 
    ctxtReadialGradient.lineWidth = 3;
    ctxtReadialGradient.rect(0, 0, 600, 400);
    var gradient1 = ctxtReadialGradient.createRadialGradient(200, 200, 5, 250, 250, 100);
    gradient1.addColorStop(0, "Red");
    gradient1.addColorStop(.5, "Orange");
    gradient1.addColorStop(1, "blue");
    ctxtReadialGradient.fillStyle = gradient1;
    ctxtReadialGradient.fill();
    ctxtReadialGradient.stroke();


    /**
     * The canvas filled with a pattern drawn on it 
     */

    var drawingSurfaceFilledGradient = document.getElementById("drawingSurfaceFilledGradient");
    var ctxtFilledGradient = drawingSurfaceFilledGradient.getContext("2d"); 

    ctxtFilledGradient.lineWidth = 3;
    ctxtFilledGradient.rect(0, 0, 600, 400);
    var img = new Image();
    img.src = "../src/orange.png";
    img.onload = function () {
        var pat = ctxtFilledGradient.createPattern(img, "repeat");
        ctxtFilledGradient.fillStyle = pat;
        ctxtFilledGradient.fill();
        ctxtFilledGradient.stroke();
    }

    /**
     * An image drawn on a canvas
     */

    var drawingSurfaceDrawnImage = document.getElementById("drawingSurfaceDrawnImage");
    var ctxtDrawnImage = drawingSurfaceDrawnImage.getContext("2d"); 

    var img1 = new Image();
    img1.src = "../src/orange.png";

    img1.onload = function () {

        ctxtDrawnImage.drawImage(img1, 0, 0);
        ctxtDrawnImage.stroke();
    }    

    /**
     * Progression of text with changing styles
     */

    var drawingSurfaceDrawnText = document.getElementById("drawingSurfaceDrawnText");
    var ctxtDrawnText = drawingSurfaceDrawnText.getContext("2d"); 

    ctxtDrawnText.strokeText("1. Text with default font", 100, 100);
    
    ctxtDrawnText.font = "24px arial";
    ctxtDrawnText.strokeText("2. Text with altered font", 100 ,125);

    ctxtDrawnText.font ="24px arial";
    ctxtDrawnText.strokeStyle = "Red";    
    ctxtDrawnText.strokeText("3. Text with altered colored font", 100, 160);

    ctxtDrawnText.font ="24px arial";
    ctxtDrawnText.fillStyle = "Red";    
    ctxtDrawnText.fillText("3. Text with altered colored font", 100, 185);


    ctxtDrawnText.font = "24px arial";
    ctxtDrawnText.textAlign = "center";
    ctxtDrawnText.fillStyle = "Red";
    ctxtDrawnText.fillText("5. Text with altered colored font Centered.", drawingSurfaceDrawnText.width / 2, drawingSurfaceDrawnText.height / 2);
    

}
