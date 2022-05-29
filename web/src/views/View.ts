/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */

// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { Model } from '../models/Model';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `VIEW` CLASS
/* ========================================================================== */
export abstract class View<T extends Model<K>, K> {
   constructor(public parent: Element, public model: T) {
      this.bindModel();
   }

   abstract eventsMap(): { [key: string]: () => void };
   abstract template(): string;

   bindEvents(fragment: DocumentFragment): void {
      for (let eventKey in this.eventsMap) {
         const [eventName, selector] = eventKey.split(':');

         fragment.querySelectorAll(selector).forEach(element => {
            element.addEventListener(eventName, this.eventsMap[eventKey]);
         });
      }
   }

   bindModel(): void {
      this.model.on('change', () => {
         this.render();
      });
   }

   render(): void {
      this.parent.innerHTML = '';
      const templateElement = document.createElement('template');
      templateElement.innerHTML = this.template();
      this.bindEvents(templateElement.content);
      this.parent.appendChild(templateElement.content);
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
