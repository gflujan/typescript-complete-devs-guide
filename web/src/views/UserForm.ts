/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { User } from '../models/User';
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
   constructor(public parent: Element, public model: User) {}

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
         'click:.set-age': this.onSetAgeClick,
         // not using, just keeping them for reference
         // 'click:button': this.onClickButton,
         // 'mouseenter:h1': this.onHeaderHover,
         // 'drag:div': this.onDragDiv,
      };
   }

   onSetAgeClick(): void {
      console.debug('The user clicked the set age button');
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
            <div>User name: ${this.model.get('name')}</div>
            <div>User age: ${this.model.get('age')}</div>
            <input />
            <button>Click Me</button>
            <button class="set-age">Set Random Age</button>
         </div>
      `;
   }
}
