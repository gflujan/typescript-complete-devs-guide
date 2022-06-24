/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import { Component } from 'react';
// Packages
import { connect } from 'react-redux';
// Context / Stores / Routers
import { fetchTodos } from '../actions';
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { AppProps, RootState, StateProps, Todo } from '../types';
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
const mapStateToProps = (state: RootState): StateProps => {
   const { todos } = state;
   return { todos };
};

/* ========================================================================== */
// DEFINING THE `MAIN APP` COMPONENT
/* ========================================================================== */
class Bllr extends Component<AppProps> {
   // constructor(props: AppProps) {
   //    super(props);
   // }

   onButtonClick = (): void => {
      this.props.fetchTodos();
   };

   renderList(): JSX.Element[] {
      const { todos } = this.props;

      return todos.map((todo: Todo) => {
         return <li key={todo.id}>{todo.title}</li>;
      });
   }

   render() {
      return (
         <div>
            <button className="" type="button" onClick={this.onButtonClick}>
               Rooney sucks!!!
            </button>
            <ol>{this.renderList()}</ol>
         </div>
      );
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export const App = connect(mapStateToProps, { fetchTodos })(Bllr);
