/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { NextFunction, Request, Response, Router } from 'express';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
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
         <a href="/login">Try logging in instead?</a>
      </div>
   `);
};

const validCreds = (email: string, password: string): boolean => {
   return email && email === 'bllr@example.com' && password && password === '12345';
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
            <p><a href="/login">Or login, if you dare! mwahahaha</a></p>
            <div>
               <a href="/protected">Protected Route</a>
            </div>
         </div>
      `);
   }
});

router.post('/login', (request: RequestWithBody, response: Response) => {
   const { email, password } = request.body;

   if (validCreds(email, password)) {
      request.session = { loggedIn: true };
      response.redirect('/');
   } else {
      response.send('invalid credentials');
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
