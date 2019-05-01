'use strict'

/**
 * This module handles all the graphics 
 */

 class Graphics{
     drawEllipse(x, y, size){
         const panel = document.getElementById('canvas')
         if (panel.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2, true);
            ctx.stroke();
        }
    }

 }