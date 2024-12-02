// Combines multiple types.

type Admin = { isAdmin: boolean };
type User = { name: string };
type AdminUser = Admin & User;
const admin: AdminUser = { isAdmin: true, name: "John" };

interface data1 {
  pass: string;
}

interface data2 {
  em: string;
}
