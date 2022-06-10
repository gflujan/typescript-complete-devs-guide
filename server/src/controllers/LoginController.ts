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
import { BodyValidator, Controller, Get, Post, Use } from './decorators';
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
const LOGIN_CONTROLLER_PATH_PREFIX = '/auth';

/* ========================================================================== */
// DEFINING THE `LOGIN CONTROLLER` CLASS
/* ========================================================================== */
@Controller(LOGIN_CONTROLLER_PATH_PREFIX)
class LoginController {
   constructor() {}

   @Get('/login')
   getLogin(request: RequestWithBody, response: Response): void {
      response.send(`
         <form method="POST" action="${LOGIN_CONTROLLER_PATH_PREFIX}/login">
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

   @Post('/login')
   @BodyValidator('email', 'password')
   postLogin(request: RequestWithBody, response: Response) {
      const { email, password } = request.body;

      if (!email || !password) {
         response.send('stuff');
      }

      if (LoginController.validCreds(email, password)) {
         request.session = { loggedIn: true };
         response.redirect('/');
      } else {
         response.send('invalid credentials');
      }
   }

   private static validCreds(email?: string, password?: string): boolean {
      return Boolean(email && email === 'bllr@example.com' && password && password === '12345');
   }
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
