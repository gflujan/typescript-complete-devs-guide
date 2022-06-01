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

/* ========================================================================== */
// DEFINING THE `LOGIN ROUTES` HELPERS
/* ========================================================================== */
router.get('/', (req: Request, res: Response) => {
   res.send('nothing to see here. shove off!');
});

router.get('/login', (req: Request, res: Response) => {
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

router.post('/login', (req: Request, res: Response) => {
   const { email, password } = req.body;
   res.send(email + password);
});

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
export { router };
