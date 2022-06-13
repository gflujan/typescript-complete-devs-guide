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
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
const FETCH_TODOS = 'FETCH_TODOS';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

/* ========================================================================== */
// DEFINING THE `GLOBAL REDUX` ACTIONS
/* ========================================================================== */
export const fetchTodos = () => {
   return async (dispatch: Dispatch): void => {
      const response = await axios.get(TODOS_URL);

      dispatch({
         type: FETCH_TODOS,
         payload: response.data,
      });
   };
};

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
