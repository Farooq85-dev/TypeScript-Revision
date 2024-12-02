let userName: string = "Muhammad Farooq";
let isLoggedIn: boolean = true;
let marks: number = 221312;
let userData: object = {};
let students: string[] = ["Muhammad"];
let mixed: Array<any> = [true, "fkjhsf", 525];

function add(a: number, b: number): number {
  return a + b;
}

add(2, 3);

const multiply = (obj: { c: number; d: number }): number => {
  return obj.c * obj.d;
};

multiply({ c: 2, d: 3 });

let isAm: undefined | null = null;
isAm = undefined;

// type UserType = {
//   userName: string;
//   userEmail: string;
// };

interface UserType {
  userName: string;
  userEmail?: string;
}

const riders: UserType = {
  userName: "Farooq",
  userEmail: undefined,
};

const toggleSpeakers: [string, string, string] = [
  "left-speaker",
  "right-speaker",
  "middle-speaker",
];

console.log(toggleSpeakers.findIndex((speaker) => speaker === "left-speaker"));

let eaters: Array<object> = [{}];

interface color {
  a: string;
}

interface man {
  f: number;
}

// type final = color & man;

// Enums

enum navbarItems {
  home = "HOME",
  about = "ABOUT",
  contact = "CONTACT",
  certificates = "CERTIFICATES",
}

console.log(navbarItems.about);

// Type Alias vs Interface

// Syntax

// type hello = {
//   userName: string;
//   userEmail: string;
// };

// interface User {
//   password: string;
// }

// Re-use ability

// type hello = {
//   userName: string;
// };

// type hello = {
//   userPassword: string;
// };

// interface User {
//   userName: string;
// }

// interface User {
//   userEmail: string;
// }

// Extend

// type data1 = {
//   eamil: string;
// };

// type data2 extens data1 = {
//   password: string;
// };

interface data1 {
  email: string;
}

interface data2 extends data1 {
  password: string;
}

const obj: data2 = {
  email: "",
  password: "",
};

// Type Assertions
let el = document.createElement("div") as HTMLDivElement;

let ele = <HTMLDivElement>document.createElement("div");

// String Literals
let userNamee: "Farooq";
// Number Literals
let markss: 2;
// Boolean Literals
let isVerified: false;
