class Boat {
   color: string = 'red';

   // constructor() {}

   get formattedColor(): string {
      return `This boat color is ${this.color}`;
   }

   @testDecorator
   pilot(): void {
      throw new Error();
      console.log('swish');
   }
}

function testDecorator(target: any, key: string, desc: PropertyDescriptor): void {
   const method = desc.value;

   desc.value = function() {
      try {
         method();
      } catch (e) {
         console.log('Oops, the boat sank! wah-wah-wah');
      }
   }
}

new Boat().pilot();
