


export class PropertySheet {

    //TODO: Add OK, Cancel buttons
    //TODO: Implement event handlers for those buttons

    /**
     * Construct a new property sheet
     * @param {Modifiable} owner
     * @param modalname
     * @param modalwrapper
     * @param modalwindow
     * @param modalform
     */
	constructor(owner, modalwrapper, modalwindow, modalform) {
        this.owner = owner;
        this.addChangeListener = [];
        this.modalWrapper = document.getElementById(modalwrapper)
        this.modalWindow = document.getElementById(modalwindow)
        this.form = document.getElementById(modalform)
    }
    
    /**
     * Show property sheet
     */
    show() {
        // Get owner's properties map
        let properties = this.owner.getProperties();
        //TODO: Open a property editor window with
        
        //owner's property prefilled
    }

    /**
     * Collect and update property of owner
     */
    set() {
        let newProperties = //TODO: Collect data from property editor dialog window
        // Then
        owner.setProperties(newProperty);
    }
    
    createButton(){
        
    }

    openModal (e) {
        this.modalWrapper.className = "overlay";
        let overflow = this.modalWindow.offsetHeight - document.documentElement.clientHeight;
        if(overflow > 0) {
            this.modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(this.modalWindow).height) - overflow) + "px";
        }
        this.modalWindow.style.marginTop = (-this.modalWindow.offsetHeight)/2 + "px";
        this.modalWindow.style.marginLeft = (-this.modalWindow.offsetWidth)/2 + "px";
        //  e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
    closeModal () {
        this.modalWrapper.className = "";
        //e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
    saveInput (modalform){
        const form = document.getElementById(modalform)
        let text = "";
        for (let i = 0; i < form.length; i++){
            text += form.elements[i].value + "<br>";
        }
        this.closeModal()
    }
}
        

export default PropertySheet