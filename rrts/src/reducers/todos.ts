/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { Action, ActionTypes, Todo } from '../types';
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `TODOS` REDUCER
/* ========================================================================== */
export const todosReducer = (state: Todo[] = [], action: Action) => {
   switch (action.type) {
      case ActionTypes.FetchTodos:
         return action.payload;
      default:
         return state;
   }
};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
