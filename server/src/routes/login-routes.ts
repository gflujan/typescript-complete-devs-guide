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
import { Request, Response } from 'express';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
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
router.get('/', (req: RequestWithBody, res: Response) => {
   if (req.session.loggedIn) {
      res.send('eyyyy, congrats! you are logged in!');
   } else {
      res.send(`
         <div>
            <p>nothing to see here. shove off!</p>
            <button class="" onClick="" type="button">unless, login?</button>
         </div>
      `);
   }
});

router.get('/login', (req: RequestWithBody, res: Response) => {
   res.send(`
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
      </form>
   `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
   const { email, password } = req.body;

   if (validCreds(email, password)) {
      req.session = { loggedIn: true };
      res.redirect('/');
   } else {
      res.send('invalid credentials');
   }
});

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export { router };
