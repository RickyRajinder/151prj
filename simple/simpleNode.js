import { RectangularNode } from '../graph/rectangularnode.js'
'use strict'

export class SimpleNode extends RectangularNode {

    drawColor(g2, color){
        let saved = g2.fillStyle;
        let strokeSaved = g2.strokeStyle;
        //g2.strokeStyle = 'black';
        g2.fillStyle = color;
        g2.fillRect(this.x, this.y, this.width, this.height);
        g2.strokeRect(this.x, this.y, this.width, this.height);
        g2.fillStyle = saved;
        g2.strokeStyle = strokeSaved;
    }

}