class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  set username(username) {
    if (typeof username !== "string") {
      throw new Error("Value of username must be a string.");
    }
    this._username = username;
  }

  set password(password) {
    if (typeof password !== "string") {
      throw new Error("Value of password must be a string.");
    }
    this.#password = password;
  }

  resetPassword(newPassword) {
    this.#updatePassword(newPassword);
  }

  #updatePassword(newPassword) {
    this.#password = newPassword;
  }
}

export default User;
