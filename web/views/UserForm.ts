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

   eventsMap(): EventsMap {
      return {
         'click:button': this.onClickButton,
         // not using, just keeping them for reference
         // 'hover:h1': this.onHoverHeader,
         // 'drag:div': this.onDragDiv,
      };
   }

   onClickButton(): void {
      console.log('button has been clicked');
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

   render(): void {
      const templateElement = document.createElement('template');
      templateElement.innerHTML = this.template();
      this.parent.appendChild(templateElement.content);
   }
}
