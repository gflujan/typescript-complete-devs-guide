class Sorter {
   constructor(public collection: Array<number> | string) {}

   sort(): void {
      const { length } = this.collection;

      for (let i = 0; i < length; i += 1) {
         for (let j = 0; j < length - i - 1; j += 1) {
            // NOTE :: All of this only works if `this.collection` is an Array<number>
            // Only run this block of logic if the incoming `collection` is an array of numbers
            if (this.collection instanceof Array) {
               if (this.collection[j] > this.collection[j + 1]) {
                  const temp = this.collection[j];
                  this.collection[j] = this.collection[j + 1];
                  this.collection[j + 1] = temp;
               }
            }

            // NOTE :: All of this only works if `this.collection` is a string
            // Only run this block of logic if the incoming `collection` is an string
            // ~~~ logic to compare and swap characters in a string
            if (typeof this.collection === 'string') {
            }
         }
      }
   }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
