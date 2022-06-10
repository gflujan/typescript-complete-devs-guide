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
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// DEFINING THE ROUTE DECORATORS
/* ========================================================================== */
function routeBinder(method: string) {
   return function (path: string) {
      return function (target: any, key: string, desc: PropertyDescriptor) {
         Reflect.defineMetadata('path', path, target, key);
         Reflect.defineMetadata('method', method, target, key);
      };
   };
}

export const Delete = routeBinder('delete');
export const Get = routeBinder('get');
export const Post = routeBinder('post');
export const Put = routeBinder('put');
