'use strict' 
import { Toolbar } from '../graph/toolbar.js'
import { SimpleGraph } from './simpleGraph.js'
import { SimpleNode } from './simpleNode.js'
import { StraightEdge } from './simpleEdge.js'
import { ArrowHead } from '../graph/arrowhead.js'

function addNodeMenuButton(menu, node) {
    let b0 = menu.addButton(node, function() {
        menu.selected = SimpleNode;
    })
    node.width = b0.width - b0.width / 3
    node.height = b0.height - b0.height / 3
}

function addEdgeMenuButton(menu, edge) {
    let b = menu.addButton(edge, function() {
        menu.selected = StraightEdge;
    })
    let tmpNode1 = new SimpleNode(0, 0, 0, 0)
    let tmpNode2 = new SimpleNode(b.width - b.width / 3,
        b.height - b.height / 3, 0, 0)
    edge.connect(tmpNode1, tmpNode2)
    edge.setEndArrowHead(ArrowHead.WDiamond)
}



document.addEventListener('DOMContentLoaded', function () {
    let panel = document.getElementById("canvas1")//top canvas for toolbar
    let g2 = panel.getContext("2d")
    const graph = new SimpleGraph()
    let menu = new Toolbar(0, 0, 1000, 60)
    const n1 = new SimpleNode(0, 0, 30, 10)
    //graph.addNode(n1);
    const e1 = new StraightEdge()
    //graph.addEdge(e1);
    addNodeMenuButton(menu, n1);
    addEdgeMenuButton(menu, e1);
    menu.draw(g2);
    

    let panel2 = document.getElementById("canvas")//bottom canvas
    let selected = undefined
    let dragStartPoint = undefined
    let dragStartBounds = undefined


    panel.addEventListener('click', event => {//select a tool
        menu.buttons.forEach(function(b){
            if (b.contains(event.clientX, event.clientY))
                b.action()
        })
    })


    panel2.addEventListener('click', event => {//draw an element
        if(menu.selected !== undefined) {
            if(menu.selected == SimpleNode) {
                let node = new SimpleNode(event.clientX, event.clientY, 30, 10);
                graph.addNode(node);
                graph.draw(panel2);
            }
            else if(menu.selected == StraightEdge) {
                graph.nodes.forEach(function(n){
                    if(n.contains(event.clientX, event.clientY)){
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
        }

    });
})





