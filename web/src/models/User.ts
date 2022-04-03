/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import axios, { AxiosError, AxiosResponse } from 'axios';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
interface UserProps {
   age?: number;
   id?: number;
   name?: string;
}

type Callback = () => void;

/* ========================================================================== */
// DEFINING THE `USER` CLASS
/* ========================================================================== */
export class User {
   events: { [key: string]: Array<Callback> } = {};

   constructor(private data: UserProps) {}

   public get(propName: string): string | number {
      return this.data[propName];
   }

   public set(update: UserProps): void {
      // NOTE **[G]** :: Which version is/do I like "better" for me?
      Object.assign(this.data, update);
      // this.data = { ...this.data, ...update };
   }

   public on(eventName: string, cb: Callback): void {
      const handlers: Array<Callback> = this.events[eventName] ?? [];
      handlers.push(cb);
      this.events[eventName] = handlers;
   }

   public trigger(eventName: string): void {
      const handlers: Array<Callback> = this.events[eventName];

      if (handlers?.length) {
         handlers.forEach((cb: Callback) => {
            cb();
         });
      }
   }

   public fetch(): void {
      const userId: number = this.get('id');

      axios
         .get(`http://localhost:3000/users/${userId}`)
         .then((response: AxiosResponse) => {
            this.set(response.data);
         })
         .catch((error: AxiosError) => {
            console.error(`There was a problem retrieving the user info for ID #${userId}.`, {
               error,
            });
         });
   }

   public save(): void {
      const userId: number = this.get('id');

      if (userId) {
         axios
            .put(`http://localhost:3000/users/${userId}`, this.data)
            .then((response: AxiosResponse) => {
               console.debug('Successfully updated existing user', { user: response.data });
            })
            .catch((error: AxiosError) => {
               console.error(`There was a problem updating the user info for ID #${userId}.`, {
                  error,
               });
            });
      } else {
         axios
            .post('http://localhost:3000/users', this.data)
            .then((response: AxiosResponse) => {
               console.debug('Successfully saved new user', {user: response.data});
            })
            .catch((error: AxiosError) => {
               console.error('There was a problem saving the new user info.', {
                  error,
               });
            });
      }
   }
}
