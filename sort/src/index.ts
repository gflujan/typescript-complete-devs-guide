// Adding a comment to test out my proxy
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection: NumbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter: Sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
