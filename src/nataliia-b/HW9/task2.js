// Создать классы пользователя и администратора
// Ваша задача:
// Создайте классы User и Admin. Класс Admin расширяет класс User. 
// Класс Admin имеет публичную функцию deleteUser().

// Параметры для класса User
//     username: String
//     (private) password: String

// Параметры для класса Admin
//     username: String
//     (private) password: String

// Свойства класса Admin
// Следующие свойства также должны быть добавлены в класс Admin. Они не являются параметрами.
//     isAdmin = true;

// Результат
// [testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

// Ограничения
// Пароль должен быть частной переменной
// updatePassword должен быть частной функцией
// Вы должны использовать ключевое слово extends для создания связи между пользователем и администратором

class User {                           // Класс User  имеет закрытую функцию updatePassword() и 
    #password;                         //  публичную функцию resetPassword(). 
    constructor(userName, password) {
        this.userName = userName;
        this.#password = password;
    }
    #updatePassword(newPassword) {       // updatePassword(newPassword) Устанавливает пароль пользователя 
        this.#password = newPassword;    // на newPassword. Это частная функция.
    };
    resetPassword(newPassword) {                // Функции класса User resetPassword(newPassword)
        this.#updatePassword(newPassword);      // Вызывает закрытую функцию updatePassword с новым паролем
    };
}

class Admin extends User {
    constructor(userName, password) {
        super(userName, password);
        this.isAdmin = true;
    }
    deleteUser(userToDelete) {                             // deleteUser(userToDelete): Принимает строку userToDelete  
        return `Пользователь ${userToDelete} был удален.`; // и возвращает строковое сообщение: 
    }                                                     // "Пользователь [userToDelete] был удален."
};

const testUser = new User("Anna", "aSdf57");
const testAdmin = new Admin("Peter", "po26WE");
const arr = [testUser, testAdmin];
console.log(arr);
console.log(testAdmin.deleteUser("John"));
console.log(testUser.password);  //undefined
console.log(testUser.deleteUser); //undefined
