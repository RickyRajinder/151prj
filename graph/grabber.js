'use strict'

class Grabbers {

    draw(){
        let select = new Path2D()
        select.rect(10, 10, 50, 40)
        panelg2.stroke(select)
        panelg2.fillStyle = '#000000'
        const box = panelg2.fillRect(20, 20, 6, 6)
        panelg2.fillRect(40, 20, 6, 6)
        panelg2.fillRect(20, 35, 6, 6)
        panelg2.fillRect(40, 35, 6, 6)
        panel.addEventListener('mousemove', function(e) {
            if (panelg2.isPointInPath(select, e.clientX, e.clientY)){
                panelg2.font = "15px Arial"
                panelg2.fillText("Select", 15, 70)
            }
        })
    }
}