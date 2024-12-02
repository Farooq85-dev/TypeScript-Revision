// Write reusable and multiple injection type-safety code.

function identity<T>(value: T): T {
  return value;
}

const result1 = identity<string>("Hello");
const result2 = identity<number>(3218456);
const result3 = identity<boolean>(true);
