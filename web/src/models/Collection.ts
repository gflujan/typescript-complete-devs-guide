/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import axios, { AxiosError, AxiosResponse } from 'axios';
// Context / Store / Router
// Components / Classes / Controllers / Services
import { Eventing } from './Eventing';
import { User, UserProps } from './User';
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
/* ========================================================================== */
// DEFINING THE `COLLECTION` CLASS
/* ========================================================================== */
export class Collection {
   events: Eventing = new Eventing();
   models: Array<User> = [];

   constructor(public rootUrl: string) {}

   fetch(): void {
      axios
         .get(this.rootUrl)
         .then((response: AxiosResponse) => {
            for (const record of response.data) {
               const user = User.buildUser(record);
               this.models.push(user);
            }

            this.trigger('change');
         })
         .catch((error: AxiosError) => {
            console.error(`There was a problem fetching the users collection from the DB`, {
               error,
            });
         });
   }

   get on() {
      return this.events.on;
   }

   get trigger() {
      return this.events.trigger;
   }
}
