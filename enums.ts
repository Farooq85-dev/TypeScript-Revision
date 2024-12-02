// Define a set of named constants. Enums, short for enumerations,
// Enums holds a set of constant vlaues. Lets assume a user have only three rules may be admin, user, and modirator.

enum Status {
  ADMIN = "admin",
  USER = "user",
  MODIRATOR = "modirator",
}

const userStatus: Status = Status.ADMIN;
