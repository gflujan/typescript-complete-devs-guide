/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import express from 'express';
// Context / Store / Router
import { router } from './routes/login-routes';
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
app.use(router);

app.listen(3000, () => {
   console.debug('Listening on port 3000');
});

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
