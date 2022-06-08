/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
// Context / Stores / Routers
import { AppRouter } from './AppRouter';
import { router } from './routes/login-routes';
// Components / Classes / Controllers / Services
import './controllers/LoginController';
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
app.use(bodyParser.urlencoded({ extended: true }))
   .use(cookieSession({ keys: ['secret'] }))
   .use(router) // <-- this should always be last/after any middlewares
   .use(AppRouter.instance);

app.listen(3000, () => {
   console.info('Listening on port 3000');
});

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
