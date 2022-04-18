/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { User } from './models/User';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */

/* ========================================================================== */
// DEFINING THE `INDEX` FILE
/* ========================================================================== */
// const user: User = new User({ id: 1 });
// user.set({ age: 100, name: 'bllr' });
// user.save();

const newUser: User = new User({ age: 123, name: 'sloane' });
// newUser.save();
console.log(newUser.get('name'));

newUser.on('change', () => {
   console.log('user was changed');
});

newUser.set({ age: 456 });

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
