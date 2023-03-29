import "./components/fath";
import zcard, { Attribute } from "./components/zcard/zcard";
import { traer_zelda } from "./zdata";

class Appcontainer extends HTMLElement{
    Zelist: zcard[] = [];

    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback(){
        const dataZelda = await traer_zelda();
        dataZelda.forEach((data: any) => {
            console.log(data);
        });
        dataZelda.forEach((data: any) => {
            const ZelCard = this.ownerDocument.createElement("z-card") as zcard;
                ZelCard.setAttribute(Attribute.image, data.image);
                ZelCard.setAttribute(Attribute.name, data.name);
                ZelCard.setAttribute(Attribute.description, data.description);
                this.Zelist.push(ZelCard);
        });
        this.render(this.Zelist);
    }
    render(Zelist:any) {
        const ZelCards = this.ownerDocument.createElement("section")
        ZelCards.className = "ZeldaSection"
        this.Zelist.forEach((ZelCard) => {
            ZelCards.appendChild(ZelCard)
        });
        this.shadowRoot?.appendChild(ZelCards);
}
}
customElements.define("app-container", Appcontainer);

