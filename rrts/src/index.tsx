/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import { Component } from 'react';
import { createRoot } from 'react-dom/client';
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
interface AppProps {
   color: string;
   // color?: string; // this can also be optional, which will make it `undefined` and not rendered if called in the HTML
}

interface AppState {
   counter: number;
}

/* ========================================================================== */
// DEFINING THE `MAIN APP` COMPONENT
/* ========================================================================== */
class App extends Component<AppProps, AppState> {
   // NOTE :: Using this syntax to create `state` is actually overriding the `state` property of the `Component` class
   // state = {
   //    counter: 0,
   // };

   private bueller: string = 'rooney!';

   constructor(props: AppProps) {
      super(props);

      // NOTE :: Using this, I get this Error, why? -- "Property 'counter' does not exist on type 'Readonly<{}>'"
      // NOTE :: I get this error because this syntax is trying to use the `state` property of the `Component` class
      // but because no `state` property interface/type is defined, it will throw an error
      // so this.state.counter below is trying to read the `counter` property from en empty object
      this.state = {
         counter: 0,
      };
   }

   render() {
      return (
         <div>
            <button className="" onClick={this.onIncrement} type="button">
               Increment
            </button>
            <button className="" onClick={this.onDecrement} type="button">
               Decrement
            </button>
            <button className="" onClick={this.onReset} type="button">
               Reset
            </button>
            <p>{this.state.counter}</p>
         </div>
      );
   }

   /* ========================================================================== */
   // PRIVATE METHODS
   /* ========================================================================== */
   // SELF-BOUND ARROW FUNCTION EVENT HANDLERS
   private onDecrement = (): void => {
      this.setState({
         counter: this.state.counter - 1,
      });
   };

   private onIncrement = (): void => {
      this.setState({
         counter: this.state.counter + 1,
      });
   };

   private onReset = (): void => {
      this.setState({
         counter: 0,
      });
   };
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(<App color="red" />);
