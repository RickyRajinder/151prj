'use strict'
class MenuButton {
    constructor(shape, eventListener, action, type) {//action: a function passed in by user for the listener to execute
        //type: of button (node, edge, ...)
        this.eventListener = document.addEventListener('click', action);
        draw(shape);
        isSelected = false;
    }

    isSelected(){
        return isSelected;
    }

    setSelected(){
        isSelected = true;
    }
}