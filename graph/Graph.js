'use strict';

function createGraphFramework() {


    const nodePrototype = {
        draw: function (g2) {

        },
        translate: function (dx, dy) {

        },
        contains: function (point) { },
        getConnectionPoint: function (point) { },
        getBounds: function () { },
        clone: function () { }
    }

    const edgePrototype = {
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
