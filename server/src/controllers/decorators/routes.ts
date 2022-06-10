/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import 'reflect-metadata';
// Context / Stores / Routers
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
// DEFINING & BINDING THE ROUTE DECORATORS
/* ========================================================================== */
function routeBinder(method: string) {
   return function (path: string) {
      return function (target: any, key: string, desc: PropertyDescriptor) {
         Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
         Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
      };
   };
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export const Delete = routeBinder(Methods.Delete);
export const Get = routeBinder(Methods.Get);
export const Patch = routeBinder(Methods.Patch);
export const Post = routeBinder(Methods.Post);
export const Put = routeBinder(Methods.Put);
