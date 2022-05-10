/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
type EventsMap = { [key: string]: () => void };

/* ========================================================================== */
// DEFINING THE `USER FORM` CLASS
/* ========================================================================== */
export class UserForm {
   constructor(public parent: Element) {}

   bindEvents(fragment: DocumentFragment): void {
      for (let eventKey in this.eventsMap) {
         const [eventName, selector] = eventKey.split(':');

         fragment.querySelectorAll(selector).forEach(element => {
            element.addEventListener(eventName, this.eventsMap[eventKey]);
         });
      }
   }

   get eventsMap(): EventsMap {
      return {
         'click:button': this.onClickButton,
         'mouseenter:h1': this.onHeaderHover,
         // not using, just keeping them for reference
         // 'drag:div': this.onDragDiv,
      };
   }

   onClickButton(): void {
      console.log('button has been clicked');
   }

   onHeaderHover(): void {
      console.log('header has been hovered');
   }

   render(): void {
      const templateElement = document.createElement('template');
      templateElement.innerHTML = this.template();
      this.bindEvents(templateElement.content);
      this.parent.appendChild(templateElement.content);
   }

   template(): string {
      return `
         <div class="user-form">
            <h1>User Form</h1>
            <input />
            <button>Click Me</button>
         </div>
      `;
   }
}
