class Boat {
   color: string = 'red';

   // constructor() {}

   get formattedColor(): string {
      return `This boat color is ${this.color}`;
   }

   @testDecorator
   pilot(): void {
      console.log('swish');
   }
}

function testDecorator(target: any, key: string, pd: any): void {
   console.log('Target:', target);
   console.log('Key:', key);
   console.log('PD:', pd);
}
