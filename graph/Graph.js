'use strict';

class GraphFramework {

    constructor(node, edge){
        this.node = node
        this.edge = edge
    }

    nodePrototype() {
        draw: function (g2) {
            

        }
        translate: function (dx, dy) {

        }
        contains: function (point) { },
        getConnectionPoint: function (point) { },
        getBounds: function () { },
        clone: function () { }
    }

    edgePrototype() {
        draw: function (g2) { },
        contains: function (point) { },
        connect: function (start, end) { },
        getStart: function () { },
        getEnd: function () { },
        getConnectionPoints: function () { },
        getBounds: function (g2) { },
        clone: function(){}   
    } 
        
}
