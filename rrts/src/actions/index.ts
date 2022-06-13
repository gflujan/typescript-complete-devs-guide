/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import axios from 'axios';
import { Dispatch } from 'redux';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { ActionTypes } from './types';
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
   completed: boolean;
   id: number;
   title: string;
}

/* ========================================================================== */
// DEFINING THE `GLOBAL REDUX` ACTIONS
/* ========================================================================== */
export const fetchTodos = () => {
   return async (dispatch: Dispatch): void => {
      const response = await axios.get<Todo[]>(TODOS_URL);

      dispatch({
         type: ActionTypes.FetchTodos,
         payload: response.data,
      });
   };
};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
