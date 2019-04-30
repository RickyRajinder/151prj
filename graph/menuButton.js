'use strict'
class MenuButton {
    constructor(title, eventListener, action, type) {//action: a function passed in by user for the listener to execute
        //type: of button (node, edge, ...)
        this.eventListener = document.addEventListener('click', action)
        draw(title)
        isSelected = false
    }

    isSelected(){
        return isSelected
    }

    setSelected(){
        isSelected = true
    }
}