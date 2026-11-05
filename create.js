
import { users } from "./app.js";

const roles = ["admin", "moderator", "user"];

export function createUser(newUser) {
    if (!newUser || typeof newUser !== "object") {
        return "Noto'g'ri ma'lumot!";
    }

    if (
        typeof newUser.firstName !== "string" ||
        !newUser.firstName.trim() ||
        typeof newUser.lastName !== "string" ||
        !newUser.lastName.trim()
    ) {
        return "Ism va familiya kiritilishi shart!";
    }

    if (!Number.isInteger(newUser.age) || newUser.age < 18) {
        return "Yosh kamida 18 bo'lishi kerak!";
    }

    const email = typeof newUser.email === "string"
        ? newUser.email.trim().toLowerCase()
        : "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return "Email noto'g'ri!";
    }

    if (users.some(user => user.email.toLowerCase() === email)) {
        return "Bu email oldin ro'yxatdan o'tgan!";
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

    if (
        newUser.isActive !== undefined &&
        typeof newUser.isActive !== "boolean"
    ) {
        return "isActive noto'g'ri!";
    }

    const newId = Math.max(...users.map(user => user.id)) + 1;

    const user = {
        id: newId,
        firstName: newUser.firstName.trim(),
        lastName: newUser.lastName.trim(),
        age: newUser.age,
        email,
        role: newUser.role,
        isActive: newUser.isActive ?? true,
        balance: newUser.balance
    };

    users.push(user);

    return "Foydalanuvchi muvaffaqiyatli qo'shildi!";
}
