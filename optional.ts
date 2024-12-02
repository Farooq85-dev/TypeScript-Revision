// Denoted with ?

interface User {
  id: number;
  name?: string;
}

const user: User = { id: 1 }; // name is optional

function greet(name?: string): string {
  return `Hello, ${name || "Guest"}`;
}
