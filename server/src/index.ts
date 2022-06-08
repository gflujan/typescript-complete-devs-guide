/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
// Context / Stores / Routers
import { router } from './routes/login-routes';
import { router as controllerRouter } from './controllers/decorators/controller';
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
   .use(controllerRouter);

app.listen(3000, () => {
   console.info('Listening on port 3000');
});

console.debug('🚀--BLLR?: ===============================================');
console.debug(LoginController);
console.debug('🚀--BLLR?: ===============================================');

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
