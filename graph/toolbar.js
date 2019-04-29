'use strict'
class Toolbar {
    constructor(buttons) {
        this.buttons = []
        this.tools = []
        
        
    }

    add(MenuButton) {
        buttons.push(MenuButton)
    }

    getSelectedTool() {
        for (i = 0; i < buttons.length; i++)
            if (buttons[i].isSelected)
                return buttons[i];
    }

    drawToolBar() {
        const bar = new Path2D()
        ctx.lineWidth = 2
        bar.rect(5, 5, 990, 50)
        ctx.rect(5, 5, 990, 50)
        ctx.fillStyle = '#99e6ff'
        ctx.fill(bar)
        ctx.stroke()
    }

    drawButtons(){
        this.buttons.forEach(function(){drawButtons(button)
        });

    



}