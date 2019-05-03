import {SimpleEdge} from "./simpleEdge";
import {SimpleNode} from "./simpleNode";

'use strict'

class SimpleGraph extends Graph{
    constructor(){
        super();
    }
}

function drawSelectButton(){
        let select = new Path2D()
        select.rect(10, 10, 50, 40)
        panelg2.stroke(select)
        panelg2.fillStyle = '#000000'
        const box = panelg2.fillRect(20, 20, 6, 6)
        panelg2.fillRect(40, 20, 6, 6)
        panelg2.fillRect(20, 35, 6, 6)
        panelg2.fillRect(40, 35, 6, 6)
        panel.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(select, e.clientX, e.clientY)){
                ctx.font = "15px Arial"
                ctx.fillText("Select", 15, 70)
            }
        })
    }
document.addEventListener('DOMContentLoaded', function (){
    const g = new SimpleGraph();
    const toolbar = new Toolbar('canvas1', 5, 5, 990, 50);
    toolbar.addButton(, drawSelectButton);
    toolbar.draw();



})