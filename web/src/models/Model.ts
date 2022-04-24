/* ========================================================================== */
// ALL REQUIRED IMPORTS
/* ========================================================================== */
// Packages
import { AxiosPromise } from 'axios';
// Context / Store / Router
// Components / Classes / Controllers / Services
// Assets
// Constants / Models / Interfaces / Types
// Utils / Methods / Mocks
// Styles

/* ========================================================================== */
// INTERNAL HELPERS, INTERFACES, VARS & SET UP
/* ========================================================================== */
interface ModelAttributes<T> {
   get<K extends keyof T>(key: K): T[K];
   getAll(): T;
   set(value: T): void;
}

interface Sync<T> {
   fetch(id: number): AxiosPromise;
   save(data: T): AxiosPromise;
}

interface Events {
   on(eventName: string, callback: () => void): void;
   trigger(eventName: string): void;
}

/* ========================================================================== */
// DEFINING THE `MODEL` CLASS
/* ========================================================================== */
export class Model {
   constructor() {}
}

/* ========================================================================== */
// ALL REQUIRED EXPORTS
/* ========================================================================== */
