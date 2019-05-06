import { Toolbar } from '../graph/toolbar.js'
import { SimpleGraph } from './simpleGraph.js'
import { SimpleNode } from './simpleNode.js'
import { StraightEdge } from './simpleEdge.js'
import { ArrowHead } from '../graph/arrowhead.js'

var selected = null;
function addNodeMenuButton(menu, node) {
    
    let b0 = menu.addButton(node, function(e) {
        selected = SimpleNode;
    })
    node.width = b0.width - b0.width / 3
    node.height = b0.height - b0.height / 3
}

function addEdgeMenuButton(menu, edge) {
    let b = menu.addButton(edge, function(e) {
        selected = StraightEdge;
    })
    let tmpNode1 = new SimpleNode(0, 0, 0, 0)
    let tmpNode2 = new SimpleNode(b.width - b.width / 3, 
        b.height - b.height / 3, 0, 0)
    edge.connect(tmpNode1, tmpNode2)
    edge.setEndArrowHead(ArrowHead.WDiamond)
}

let panel = document.getElementById("canvas1")
let panel2 = document.getElementById("canvas")
let g2 = panel.getContext("2d")

let graph = new SimpleGraph()

let menu = new Toolbar(0, 0, 1000, 60)
panel.addEventListener("click", function(event) {
    menu.buttons.forEach(function(b){
            if (b.contains(event.clientX, event.clientY))
                b.action(event)
    })
})

addNodeMenuButton(menu, new SimpleNode(0, 0, 0, 0))
addEdgeMenuButton(menu, new StraightEdge())
menu.draw(g2)
panel2.addEventListener("click", function(e) {
    if(selected === null) {
        throw "Nothing Selected";
    }
    else if(selected === SimpleNode) {
        let node = new SimpleNode(e.clientX, e.clientY, 30, 10);
        graph.add(node, e.clientX, e.clientX);
        graph.draw(g2);

    }
    else if (selected === StraightEdge) {
        graph.nodes.forEach(function(n){
            if(n.contains(e.clientX, e.clientY)){
                let startNode = n;
                let edge = new StraightEdge();
                edge.addEventListener("click", function(e) {
                    graph.nodes.forEach(function(n){
                        if(n.contains(e.clientX, e.clientY)){
                            let endNode = n;
                            edge.connect(startNode, endNode);
                            graph.draw(g2);
                        }
                    });
                });
            }
        });
        
    }
});






