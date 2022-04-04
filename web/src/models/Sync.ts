/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
import axios, { AxiosError, AxiosPromise } from 'axios';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
import { UserProps } from './User';
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */

/* ========================================================================== */
// DEFINING THE `SYNC` CLASS
/* ========================================================================== */
export class Sync {
   constructor(public rootUrl: string): void {}

   public fetch(id: number): AxiosPromise {
      return axios.get(`${this.rootUrl}/${id}`);
      // .then((response: AxiosResponse) => {
      //    this.set(response.data);
      // })
      // .catch((error: AxiosError) => {
      //    console.error(`There was a problem retrieving the user info for ID #${id}.`, {
      //       error,
      //    });
      // });
   }

   public save(data: UserProps): AxiosPromise {
      const { id } = data;

      if (id) {
         return axios.put(`${this.rootUrl}/${id}`, data);
         // .then((response: AxiosResponse) => {
         //    console.debug('Successfully updated existing user', { user: response.data });
         // })
         // .catch((error: AxiosError) => {
         //    console.error(`There was a problem updating the user info for ID #${id}.`, {
         //       error,
         //    });
         // });
      } else {
         return axios.post(this.rootUrl, data);
         // .then((response: AxiosResponse) => {
         //    console.debug('Successfully saved new user', { user: response.data });
         // })
         // .catch((error: AxiosError) => {
         //    console.error('There was a problem saving the new user info.', {
         //       error,
         //    });
         // });
      }
   }
}
