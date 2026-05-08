# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Generics help us to write functions or components that can work with any datatype without hampering Typescript's strict type checking. If we don't use generics, we have to write the same function multiple times for different types like number,string and boolean. It increases the reusability of functions and components and makes less repetitive.

```ts
function firstArray<T>(arr: T[]): T {
  return arr[1];
}

const names = ["Partha", "Sourav"];
const numbers = [4,5,6];

console.log(firstArray(names));   
console.log(firstArray(numbers));
