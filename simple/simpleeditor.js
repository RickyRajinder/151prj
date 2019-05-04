import { Toolbar } from '../graph/toolbar.js'
import { SimpleGraph } from './simpleGraph.js'
import { SimpleNode } from './simpleNode.js'
import { StraightEdge } from './simpleEdge.js'

let panel = document.getElementById("canvas1")
let g2 = panel.getContext("2d")

let graph = new SimpleGraph()

let selected = null

let menu = new Toolbar(panel, 0, 0, 1000, 60)
menu.addButton(new SimpleNode(0, 0, 20, 10), function(e) {
    selected = SimpleNode
})

let tmpNode1 = new SimpleNode(0, 0, 0, 0)
tmpNode1.translate(0, 0)
let tmpNode2 = new SimpleNode(0, 0, 0, 0)
tmpNode2.translate(50, 0)
let tmpEdge = new StraightEdge()
tmpEdge.connect(tmpNode1, tmpNode2)
menu.addButton(tmpEdge, function(e) {
    selected = StraightEdge
})

menu.draw(g2)