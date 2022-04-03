/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// React
// Packages
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
}
