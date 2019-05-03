'use strict'
import {SimpleEdge} from "./simpleEdge";
import {SimpleNode} from "./simpleNode";

class SimpleGraph extends Graph{
    constructor(){
        this.edge = [];
        this.node = [];
    }

    getProperties() {
        edgeTypes = ["SOLID", "DASH"];
        arrowHeadTypes = [];
        for (arrowHead in ArrowHead.prototype.Prototypes)
            arrowHeadTypes.push(arrowHead.getText());
        return {
            "type": [this.type, "Option", edgeTypes],
            "startArrowHead": [this.startArrowHead, "Option", arrowHeadTypes],
            "endArrowHead": [this.endArrowHead, "Option", arrowHeadTypes]
        }
    }


}