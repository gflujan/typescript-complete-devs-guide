import 'reflect-metadata';

const plane = { color: 'red' };

/* ========================================================================== */
// These examples are assigning metadata to an object
/* ========================================================================== */
Reflect.defineMetadata('note', 'hi there', plane);
// effectively the same as: { color: 'red', note: 'hi there' }
// except that the note property is not actually visible when debugging or logging this object
Reflect.defineMetadata('height', 10, plane);

// console.log(plane); // 'note' does not get logged out

const note = Reflect.getMetadata('note', plane);
console.log(note); // now we see 'hi there'

const height = Reflect.getMetadata('height', plane);
console.log(height);

/* ========================================================================== */
// These examples are assigning metadata to an object's property
/* ========================================================================== */
Reflect.defineMetadata('type', 'color string name', plane, 'color');
const type = Reflect.getMetadata('type', plane, 'color');
console.log(type);
