/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
// Context / Store / Router
// Components / Classes / Controllers / Services
import { Eventing } from './Eventing';
import { Sync } from './Sync';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
export interface UserProps {
   age?: number;
   id?: number;
   name?: string;
}

const rootUrl = 'http://localhost:3000/users';

/* ========================================================================== */
// DEFINING THE `USER` CLASS
/* ========================================================================== */
export class User {
   public events: Eventing = new Eventing();
   public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

   constructor(private data: UserProps): void {}

   public get(propName: string): string | number {
      return this.data[propName];
   }

   public set(update: UserProps): void {
      // NOTE **[G]** :: Which version is/do I like "better" for me?
      Object.assign(this.data, update);
      // this.data = { ...this.data, ...update };
   }
}
