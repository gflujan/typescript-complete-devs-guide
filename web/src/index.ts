/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { User } from './models/User';
import { UserForm } from './views/UserForm';
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
   const userForm = new UserForm(root, user);
   userForm.render();
} else {
   throw new Error('Root element not found!');
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
