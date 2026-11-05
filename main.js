
import { users } from "./app.js";
import { createUser } from "./create.js";
import { getUsers, getUserById, getUsersByRole } from "./read.js";
import { updateUser } from "./update.js";
import { deleteUser } from "./delete.js";

// CREATE
console.log("CREATE:");
console.log(createUser({
    firstName: "Bobur",
    lastName: "Hasanov",
    age: 25,
    email: "bobur@gmail.com",
    role: "user",
    balance: 600
}));

// READ
console.log("READ:");
getUsers();

// USER BY ID
console.log("USER BY ID:");
console.log(getUserById(3));
console.log(getUserById(100));

// USERS BY ROLE
console.log("USERS BY ROLE:");
console.log(getUsersByRole("admin"));
console.log(getUsersByRole("moderator"));

// UPDATE
console.log("UPDATE:");
console.log(updateUser(2, {
    age: 20,
    balance: 800
}));

console.log(updateUser(4, {
    firstName: "Madina",
    email: "madina.new@gmail.com"
}));

console.log(updateUser(1, {
    role: "superadmin"
}));

// DELETE
console.log("DELETE:");
console.log(deleteUser(3));
console.log(deleteUser(1));
console.log(deleteUser(100));

// FINAL
console.log("YAKUNIY USERS:");
console.log(users);
