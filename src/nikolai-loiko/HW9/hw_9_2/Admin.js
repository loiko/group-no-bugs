import User from "./User.js";

class Admin extends User {
  isAdmin = true;

  deleteUser(userToDelete) {
    return `Пользователь ${userToDelete} был удален`;
  }
}

export default Admin;
