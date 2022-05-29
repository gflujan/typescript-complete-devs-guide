/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */

/* ========================================================================== */
// DEFINING THE `INDEX` FILE
/* ========================================================================== */
const user: User = User.buildUser({ name: 'Stephen Curry', age: 34 });
const root = document.getElementById('root');

if (root) {
   const userEdit = new UserEdit(root, user);
   userEdit.render();
   // console.debug(userEdit);
} else {
   throw new Error('Root element not found!');
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
