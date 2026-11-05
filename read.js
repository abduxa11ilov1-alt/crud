
import { users } from "./app.js";

export function getUsers() {
    users.forEach(user => {
        console.log("ID:", user.id);
        console.log("Name:", user.firstName + " " + user.lastName);
        console.log("Email:", user.email);
        console.log("Role:", user.role);
        console.log("Status:", user.isActive ? "Active" : "Inactive");
        console.log("Balance: $" + user.balance);
        console.log("----------------------");
    });
}

export function getUserById(id) {
    const user = users.find(user => user.id === id);

    return user || "User not found";
}

export function getUsersByRole(role) {
    return users.filter(user => user.role === role);
}
