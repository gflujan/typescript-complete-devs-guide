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
/* ========================================================================== */
// DEFINING THE `USER FORM` CLASS
/* ========================================================================== */
export class UserForm {
   constructor(public parent: Element) {}

   template(): string {
      return `
         <div class="user-form">
            <h1>User Form</h1>
            <input />
         </div>
      `;
   }

   render(): void {
      const templateElement = document.createElement('template');
      templateElement.innerHTML = this.template();
      this.parent.appendChild(templateElement.content);
   }
}
