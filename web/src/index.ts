/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { UserForm } from '../views/UserForm';
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
const userForm = new UserForm(document.getElementById('root'));
userForm.render();

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
