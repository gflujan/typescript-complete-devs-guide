/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `GLOBAL REDUX` ACTION TYPES
/* ========================================================================== */
export enum ActionTypes {
   FetchTodos = 'FetchTodos',
}

export interface FetchTodosAction {
   payload: Todo[];
   type: ActionTypes.FetchTodos;
}

export interface Todo {
   completed: boolean;
   id: number;
   title: string;
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
