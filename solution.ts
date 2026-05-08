function filterEvenNumbers(nums:number[]):number[]{
    const evenNumbers : number[]= [];
    for(let i=0;i<nums.length;i++){
        if(nums[i] % 2 === 0){
            evenNumbers.push(nums[i]);
        }
    }
    return evenNumbers;
}

function reverseString(str: string): string {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}


type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    } 
    else {
        return "Number";
    }
}

function getProperty<T, Key extends keyof T>(obj: T, key: Key): T[Key] {
    return obj[key];
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true
    };
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
           this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


function getIntersection(arr1: number[], arr2: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
                break; 
            }
        }
    }

    return result;
}


