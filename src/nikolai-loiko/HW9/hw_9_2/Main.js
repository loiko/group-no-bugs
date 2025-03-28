import Admin from "./Admin.js";

const admin = new Admin("Admin", "Admin123");
console.log(Admin);
admin.resetPassword("newAdmin123");
console.log(admin.deleteUser("User"));
