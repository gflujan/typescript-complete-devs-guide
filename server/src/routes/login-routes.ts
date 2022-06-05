/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { Router } from 'express';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { NextFunction, Request, Response } from 'express';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
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

const router: Router = Router();

interface RequestWithBody extends Request {
   body: { [key: string]: string | undefined };
}

const validCreds = (email: string, password: string): boolean => {
   return email && password && email === 'bllr@example.com' && password === '12345';
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

router.get('/login', (request: RequestWithBody, response: Response) => {
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
