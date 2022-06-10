/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { NextFunction, Request, Response, Router } from 'express';
// Context / Stores / Routers
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks / Decorators
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
export interface RequestWithBody extends Request {
   body: { [key: string]: string | undefined };
}

const router: Router = Router();

const requireAuth = (request: Request, response: Response, next: NextFunction): void => {
   if (request.session?.loggedIn) {
      next();
      return;
   }

   response.status(403);

   response.send(`
      <div>
         <p>You shall not pass!</p>
         <a href="/auth/login">Try logging in instead?</a>
      </div>
   `);
};

/* ========================================================================== */
// DEFINING THE `LOGIN ROUTES` HELPERS
/* ========================================================================== */
router.get('/', (request: RequestWithBody, response: Response) => {
   if (request.session?.loggedIn) {
      response.send(`
         <div>
            <div>You are logged in</div>
            <p><a href="/logout">Logout</a></p>
            <div>
               <a href="/protected">Protected Route</a>
            </div>
         </div>
      `);
   } else {
      response.send(`
            <div>
            <div>You are not logged in</div>
            <p>nothing to see here. shove off!</p>
            <p><a href="/auth/login">Or login, if you dare! mwahahaha</a></p>
            <div>
               <a href="/protected">Protected Route</a>
            </div>
         </div>
      `);
   }
});

router.get('/logout', (request: Request, response: Response) => {
   request.session = undefined;
   response.redirect('/');
});

router.get('/protected', requireAuth, (request: Request, response: Response) => {
   response.send(`
      <div>
         <div>welcome to protected route</div>
         <a href="/logout">Logout</a>
      </div>
   `);
});

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export { router };
