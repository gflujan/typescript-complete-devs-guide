/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import { AxiosError, AxiosResponse } from 'axios';
// Context / Store / Router
// Components / Classes / Controllers / Services
import { Attributes } from './Attributes';
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

const ROOT_URL = 'http://localhost:3000/users';

/* ========================================================================== */
// DEFINING THE `USER` CLASS
/* ========================================================================== */
export class User {
   public attributes: Attributes<UserProps>;
   public events: Eventing = new Eventing();
   public sync: Sync<UserProps> = new Sync<UserProps>(ROOT_URL);

   constructor(props: UserProps): void {
      this.attributes = new Attributes<UserProps>(props);
   }

   // These are the passthrough methods, no extra work needed
   get get(): UserProps {
      return this.attributes.get;
   }

   get on(): User['events']['on'] {
      return this.events.on;
   }

   get trigger(): User['events']['trigger'] {
      return this.events.trigger;
   }

   // these are the custom methods (i.e. the ones that need extra work)
   fetch(): void {
      const id: number = this.get('id');

      if (!id) {
         throw new Error('ID not found in `attributes`. Cannot fetch user without one.');
      }

      this.sync
         .fetch(id)
         .then((response: AxiosResponse): void => {
            console.info(`Successfully fetched user with ID #${id}`);
            this.set(response.data);
         })
         .catch((error: AxiosError): void => {
            console.error(`There was a problem retrieving the user info for ID #${id}.`);
         });
   }

   set(update: UserProps): void {
      this.attributes.set(update);
      this.trigger('change');
   }
}
