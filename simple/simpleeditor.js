'use strict' 
import { Toolbar } from '../graph/toolbar.js'
import { SimpleGraph } from './simpleGraph.js'
import { SimpleNode } from './simpleNode.js'
import { StraightEdge } from './simpleEdge.js'
import { ArrowHead } from '../graph/arrowhead.js'
import { PropertySheet } from "../graph/propertysheet.js";


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

    /**
     * Get the x and y coordinates of the mouse
     * @param event
     * @returns {{x: number, y: number}}
     */
    function mouseLocation(event) {
        const rect = panel.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        }
    }

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
    let g = panel2.getContext('2d');
    let selected = undefined
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

    panel2.addEventListener("auxclick", e => {
        let mousePoint = mouseLocation(event)
        selected = graph.findNode(mousePoint)
        console.log(selected)
        if (selected !== undefined) {
            const props = new PropertySheet(selected, "modal_wrapper", "modal_window", "modal_feedback")
            props.openModal()
            document.getElementById("modal_close").addEventListener("click", function (){
                props.saveInput("modal_feedback")
            }, false);
            document.getElementById("update").addEventListener("click", function (){
                let input = props.saveInput("modal_feedback")
                graph.remove(selected)
                const colornode = new SimpleNode(selected.getBounds().x, selected.getBounds().y, n1.width, n1.height)
                graph.add(colornode)
                graph.draw(g)
                colornode.drawColor(g, input[0])
            }, false)
        }
    })

    panel2.addEventListener('mousedown', event => {//draw an element on bottom
        
        if(menu.selected !== undefined) {
            if(menu.selected === SimpleNode) {
                graph.addNode(new SimpleNode(event.clientX - 20, event.clientY - 100, n1.width, n1.height));
                console.log(graph.nodes.length)
                  graph.draw(g);
            }

            if(menu.selected === StraightEdge) {
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

    panel2.addEventListener('mouseup', event => {
        if(menu.selected !== undefined && menu.selected === StraightEdge) {
            for(const n of graph.nodes) {
                    if(n.contains(event.clientX, event.clientY)) 
                        endNode = n;
            }
            edge.connect(startNode, endNode)
            graph.draw(g)
        }
    });
})





