/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { Collection } from './models/Collection';
import { User } from './models/User';
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
const collection: Collection = User.buildUserCollection();

collection.on('change', () => {
   console.log(collection);
});

collection.fetch();

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
