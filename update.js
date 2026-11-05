
import { users } from "./app.js";

const roles = ["admin", "moderator", "user"];
const allowedFields = [
    "firstName",
    "lastName",
    "age",
    "email",
    "role",
    "isActive",
    "balance"
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function updateUser(id, updatedData) {
    const user = users.find(user => user.id === id);

    if (!user) return "User not found";

    if (!updatedData || typeof updatedData !== "object") {
        return "Noto'g'ri ma'lumot!";
    }

    if (Object.hasOwn(updatedData, "id")) {
        return "ID o'zgartirilmaydi!";
    }

    if (Object.keys(updatedData).some(key => !allowedFields.includes(key))) {
        return "Noto'g'ri maydon!";
    }

    const newUser = { ...user, ...updatedData };

    if (
        typeof newUser.firstName !== "string" ||
        !newUser.firstName.trim() ||
        typeof newUser.lastName !== "string" ||
        !newUser.lastName.trim()
    ) {
        return "Ism va familiya bo'sh bo'lmasin!";
    }

    if (!Number.isInteger(newUser.age) || newUser.age < 18) {
        return "Yosh kamida 18 bo'lishi kerak!";
    }

    if (
        typeof newUser.email !== "string" ||
        !emailPattern.test(newUser.email.trim())
    ) {
        return "Email noto'g'ri!";
    }

    const email = newUser.email.trim().toLowerCase();

    if (users.some(item => item.id !== id && item.email.toLowerCase() === email)) {
        return "Bu email boshqa foydalanuvchida mavjud!";
    }

    if (!roles.includes(newUser.role)) {
        return "Role noto'g'ri!";
    }

    if (
        typeof newUser.balance !== "number" ||
        !Number.isFinite(newUser.balance) ||
        newUser.balance < 0
    ) {
        return "Balance noto'g'ri!";
    }

    if (typeof newUser.isActive !== "boolean") {
        return "isActive noto'g'ri!";
    }

    Object.assign(user, {
        ...newUser,
        firstName: newUser.firstName.trim(),
        lastName: newUser.lastName.trim(),
        email
    });

    return users;
}
