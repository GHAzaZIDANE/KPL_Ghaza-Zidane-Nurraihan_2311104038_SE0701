const fs = require('fs');
const crypto = require('crypto');

class UserManager {
  static readUsers() {
    try {
      const data = fs.readFileSync('./users.json', 'utf8');
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  static saveUsers(users) {
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
  }

  static hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  static isValidUsername(username) {
    return /^[A-Za-z]+$/.test(username) && username.length >= 4 && username.length <= 16;
  }

  static isValidPassword(password, username) {
    return /[!@#$%^&*]/.test(password) &&
           /[0-9]/.test(password) &&
           !password.toLowerCase().includes(username.toLowerCase()) &&
           password.length >= 8 && password.length <= 20;
  }

  static register(username, password) {
    if (!this.isValidUsername(username)) {
      return "Username hanya huruf A-Z, 4–16 karakter.";
    }

    if (!this.isValidPassword(password, username)) {
      return "Password harus 8–20 karakter, mengandung simbol dan angka, dan tidak boleh mengandung username.";
    }

    const users = this.readUsers();
    if (users.find(user => user.username === username)) {
      return "Username sudah terdaftar.";
    }

    const hashed = this.hashPassword(password);
    users.push({ username, password: hashed });
    this.saveUsers(users);
    return "Registrasi berhasil.";
  }

  static login(username, password) {
    const users = this.readUsers();
    const hashed = this.hashPassword(password);
    return users.find(u => u.username === username && u.password === hashed)
      ? "Login berhasil."
      : "Username atau password salah.";
  }
}

module.exports = UserManager;
