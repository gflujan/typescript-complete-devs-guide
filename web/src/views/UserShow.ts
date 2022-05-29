/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { View } from './View';
// Assets
// Constants / Models / Interfaces / Types
import { User, UserProps } from '../models/User';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
/* ========================================================================== */
export class UserShow extends View<User, UserProps> {
   // constructor() {}

   template(): string {
      return `
         <div>
            <h1>User Detail</h1>
            <div>User name: ${this.model.get('name')}</div>
            <div>User age: ${this.model.get('age')}</div>
         </div>
      `;
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
