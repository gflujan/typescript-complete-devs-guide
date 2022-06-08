/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import 'reflect-metadata';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// DEFINING THE CONTROLLER DECORATOR
/* ========================================================================== */
export function Controller(routePrefix: string) {
   return function (target: Function) {
      for (let key in target.prototype) {
         const routeHandler = target.prototype[key];
         const path = Reflect.getMetadata('path', target.prototype, key);
      }
   };
}
