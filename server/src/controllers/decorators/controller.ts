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
import { MetadataKeys, Methods } from './models';
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

      for (const methodName in target.prototype) {
         const routeHandler = target.prototype[methodName];
         const path: string = Reflect.getMetadata(MetadataKeys.Path, target.prototype, methodName);

         const method: Methods = Reflect.getMetadata(
            MetadataKeys.Method,
            target.prototype,
            methodName,
         );

         if (method && path) {
            router[method](`${routePrefix}${path}`, routeHandler);
         }
      }
   };
}
