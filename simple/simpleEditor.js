'use strict' 
import { Toolbar } from '../graph/toolbar.js'
import { SimpleGraph } from './simpleGraph.js'
import { SimpleNode } from './simpleNode.js'
import { StraightEdge } from './simpleEdge.js'
import { ArrowHead } from '../graph/arrowhead.js'
import { Grabbers } from '../graph/grabber.js'


function addNodeMenuButton(menu, node) {
    let b0 = menu.addButton(node, function() {
        menu.selected = SimpleNode;
    });
    node.width = b0.width - b0.width / 3;
    node.height = b0.height - b0.height / 3;
}

function addEdgeMenuButton(menu, edge) {
    let b = menu.addButton(edge, function() {
        menu.selected = StraightEdge;
    });
    let tmpNode1 = new SimpleNode(0, 0, 0, 0);
    let tmpNode2 = new SimpleNode(b.width - b.width / 3,
        b.height - b.height / 3, 0, 0);
    edge.connect(tmpNode1, tmpNode2);
    edge.setEndArrowHead(ArrowHead.WDiamond);
}

function addSelectMenuButton(menu, grabber) {
    let b1 = menu.addButton(grabber, function() {
        menu.selected = Grabbers;
        let panel = document.getElementById("canvas1")//top canvas for toolbar
        let g2 = panel.getContext("2d");
        grabber.draw(g2, b1.x, b1.y);
        grabber.draw(g2, b1.x + b1.width, b1.y);
        grabber.draw(g2, b1.x, b1.y + b1.height);
        grabber.draw(g2, b1.x + b1.width, b1.y + b1.height);
    });
    
}



document.addEventListener('DOMContentLoaded', function () {
    let panel = document.getElementById("canvas1")//top canvas for toolbar
    let g2 = panel.getContext("2d");
    const graph = new SimpleGraph();
    let menu = new Toolbar(0, 0, 1000, 60);
    const n1 = new SimpleNode(0, 0, 30, 10);
    const e1 = new StraightEdge();
    const grabber = new Grabbers(0, 0, 5);
    addNodeMenuButton(menu, n1);
    addEdgeMenuButton(menu, e1);
    addSelectMenuButton(menu, grabber);

    menu.draw(g2);
    

    let panel2 = document.getElementById("canvas")//bottom canvas
    let g = panel2.getContext('2d');
    let elementSelected = undefined
    let dragStartPoint = undefined
    let dragStartBounds = undefined
    let startNode = undefined;
    let endNode = undefined;
    let edge = undefined;

    panel.addEventListener('click', event => {//select a tool from top
        menu.buttons.forEach(function(b){
            if (b.contains(event.clientX, event.clientY))
                b.action()
        })
    })


    panel2.addEventListener('mousedown', event => {//draw an element on bottom
        
        if(menu.selected !== undefined) {
            if(menu.selected == SimpleNode) {
                graph.addNode(new SimpleNode(event.clientX, event.clientY, n1.width, n1.height));
                graph.draw(g);
            }

            if(menu.selected == StraightEdge) {
                for(const n of graph.nodes) {
                    if(n.contains(event.clientX, event.clientY)) 
                        startNode = n;
                }
                edge = new StraightEdge(startNode, endNode);
                graph.addEdge(edge);
                graph.draw(g);  
            }
        }
    });

    panel2.addEventListener('mousemove', event => {
        if(menu.selected !== undefined && menu.selected == SimpleNode) {

        }
    });

    panel2.addEventListener('mouseup', event => {
        if(menu.selected !== undefined && menu.selected == StraightEdge) {
            for(const n of graph.nodes) {
                    if(n.contains(event.clientX, event.clientY)) 
                        endNode = n;
            }
            edge.connect(startNode, endNode)
            graph.draw(g)
        }
    });
})





