export class NumbersCollection {
   constructor(public data: Array<number>) {}

   get length(): number {
      return this.data.length;
   }

   public compare(leftIndex: number, rightIndex: number): boolean {
      return this.data[leftIndex] > this.data[rightIndex];
   }

   public swap(leftIndex: number, rightIndex: number): void {
      const leftHand: number = this.data[leftIndex];
      this.data[leftIndex] = this.data[rightIndex];
      this.data[rightIndex] = leftHand;
   }
}
