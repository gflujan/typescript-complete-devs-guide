class Sorter {
   constructor(public collection: Array<number>) {}

   sort(): void {
      const { length } = this.collection;

      for (let i = 0; i < length; i += 1) {
         for (let j = 0; j < length - i - 1; j += 1) {
            if (this.collection[j] > this.collection[j + 1]) {
               const temp = this.collection[j];
               this.collection[j] = this.collection[j + 1];
               this.collection[j + 1] = temp;
            }
         }
      }
   }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
