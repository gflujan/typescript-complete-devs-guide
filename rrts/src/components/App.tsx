/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
import { Component } from 'react';
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
   color?: string;
}

/* ========================================================================== */
// DEFINING THE `MAIN APP` COMPONENT
/* ========================================================================== */
class App extends Component<AppProps> {
   constructor(props: AppProps) {
      super(props);
   }

   render() {
      return (
         <div>
            <h1>Rooney sucks!!!</h1>
         </div>
      );
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export { App };
