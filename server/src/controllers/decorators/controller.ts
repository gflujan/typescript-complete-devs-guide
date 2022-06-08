/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import 'reflect-metadata';
import { Router } from 'express';
// Context / Stores / Routers
import { AppRouter } from '../../AppRouter';
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE CONTROLLER DECORATOR
/* ========================================================================== */
export function Controller(routePrefix: string) {
   return function (target: Function) {
      const router: Router = AppRouter.instance;

      for (let key in target.prototype) {
         const routeHandler = target.prototype[key];
         const path = Reflect.getMetadata('path', target.prototype, key);

         if (path) {
            router.get(`${routePrefix}${path}`, routeHandler);
         }
      }
   };
}
