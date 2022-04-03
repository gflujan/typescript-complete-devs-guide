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
console.debug('————————————————————————');
const user: User = new User({ age: 100, name: 'Sloane' });
console.debug(user.get('age'));
console.debug(user.get('name'));

console.debug('————————————————————————');
user.set({ age: 200 });
console.debug(user.get('age'));
console.debug(user.get('name'));

console.debug('————————————————————————');
user.set({ name: 'Rooney' });
console.debug(user.get('age'));
console.debug(user.get('name'));

console.debug('————————————————————————');
user.on('change', () => {
   console.debug('change #1');
});
user.on('change', () => {
   console.debug('change #2');
});
user.on('bllr', () => {
   console.debug('bllr was triggered');
});
user.trigger('change');
user.trigger('bllr');
user.trigger('disNoWorky');

console.debug('————————————————————————');

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
