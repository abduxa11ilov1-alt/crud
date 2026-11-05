
import { users } from "./app.js";

export function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return "User not found";
    }

    if (users[index].role === "admin") {
        return "Admin foydalanuvchini o'chirish mumkin emas!";
    }

    users.splice(index, 1);

    return users;
}
