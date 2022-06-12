/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Stores / Routers
import { combineReducers } from 'redux';
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `GLOBAL` REDUCERS
/* ========================================================================== */
const reducers = combineReducers({
   counter: () => 1,
});

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export { reducers };
