export enum Attribute {
"image" = "image",
"name" = "name",
"description" = "description",


}

class zcard extends HTMLElement {
    image?: string;
    name?: string;
    description?: string;


    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            image: null,
            name: null,
            description: null,

        };
        return Object.keys(attrs);
    }
    constructor() {
super();
this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(
        propName: Attribute,
        _:string | undefined,
        newValue: string | undefined,
    ){
        switch (propName){
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render (){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="">
            <section>
            <image>${this.image}</image>
            <h1>Name: ${this.name}</h1>
            <p>Description: ${this.description}</p>
            </section>`;

        }
    }
}

customElements.define("z-card", zcard);
export default zcard;