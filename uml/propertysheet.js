'strict'

const modalWrapper = document.getElementById("modal_wrapper")
const modalWindow = document.getElementById("modal_window")

export class PropertyWindow /*extends graph/propertysheet.js*/ {
    openModal (e) {
        modalWrapper.className = "overlay";
        let overflow = modalWindow.offsetHeight - document.documentElement.clientHeight;
        if(overflow > 0) {
            modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(modalWindow).height) - overflow) + "px";
        }
        modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
        modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
        //  e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };
    closeModal () {
        modalWrapper.className = "";
        //e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
    clickHandler (e) {
        if (!e.target) e.target = e.srcElement;
        if (e.target.tagName === "DIV") {
            if (e.target.id !== "modal_window") {
                this.closeModal()
            }
        }
    }
    keyHandler (e) {
        if (e.keyCode === 27) this.closeModal();
    };
    saveInput (e){
        const form = document.getElementById("modal_feedback")
        let text = "";
        for (let i = 0; i < form.length; i++){
            text += form.elements[i].value + "<br>";
        }
        console.log(text)
        modalWrapper.className = "";
    }
}

export default PropertyWindow
