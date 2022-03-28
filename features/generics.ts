class ArrayOfNumbers {
   constructor(public collection: Array<number>) {}

   public get(index: number): number {
      return this.collection[index];
   }
}

class ArrayOfStrings {
   constructor(public collection: Array<string>) {}

   public get(index: number): string {
      return this.collection[index];
   }
}

class ArrayOfAnything<T> {
   constructor(public collection: Array<T>) {}

   public get(index: number): T {
      return this.collection[index];
   }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);
