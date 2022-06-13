/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { combineReducers } from 'redux';
// Context / Stores / Routers
import { todosReducer } from './todos';
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { GlobalStoreState } from '../types';
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `GLOBAL REDUX` REDUCERS
/* ========================================================================== */
const reducers = combineReducers<GlobalStoreState>({
   todos: todosReducer,
});

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export { reducers };
