/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { NextFunction, Request, Response } from 'express';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { RequestWithBody } from '../routes/login-routes';
// Utils / Methods / Mocks / Decorators
import { Controller, Get, Use } from './decorators';
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `LOGIN CONTROLLER` CLASS
/* ========================================================================== */
@Controller('/auth')
class LoginController {
   constructor() {}

   @Get('/login')
   getLogin(request: RequestWithBody, response: Response): void {
      response.send(`
         <form method="POST" action="/login">
            <div>
               <label for="">Email</label>
               <input class="" name="email" placeholder="yourname@example.com" type="text" value="" />
            </div>
            <div>
               <label for="">Password</label>
               <input class="" name="password" placeholder="*******" type="password" value="" />
            </div>
            <button class="" type="submit">Submit</button>
            <p><a href="/">Go back home</a></p>
         </form>
      `);
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
