/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import express from 'express';
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
const app = express();

/* ========================================================================== */
// DEFINING THE `INDEX ENTRY POINT` FILE
/* ========================================================================== */
app.get('/', (req: Request, res: Response) => {
   res.send(`
      <div>
         <h1>Hola Pendejo</h1>
      </div>
   `);
});

app.listen(3000, () => {
   console.debug('Listening on port 3000');
});

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
