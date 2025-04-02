//2.
/*
2. Создать классы пользователя и администратора

    В этом задании мы будем использовать приватные свойства, чтобы скрыть
    определенные значения и предотвратить прямой доступ к ним. Приватные
    свойства могут быть доступны только внутри объявления класса.

    Мы обозначаем частную переменную или функцию символом решетки (#).

    Например, если бы у нас был класс Person с номером социального
    страхования и функцией для расчета их налоговой категории, мы бы не
    обязательно хотели, чтобы эта информация была общедоступной. Поэтому мы
    можем сделать эти поля приватными, как в примере ниже:

    class Person {
        #socialSecurityNumber;

        #calculateTaxBracket() {
        }
    }

    Ваша задача:

    Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User
    имеет закрытую функцию updatePassword() и публичную функцию resetPassword().
    Класс Admin имеет публичную функцию deleteUser().

    Параметры для класса User
        username: String
        (private) password: String

    Параметры для класса Admin
        username: String
        (private) password: String

    Свойства класса Admin
    Следующие свойства также должны быть добавлены в класс Admin. Они не являются параметрами.
        isAdmin = true;

    Функции класса User
    resetPassword(newPassword)
    Вызывает закрытую функцию updatePassword с новым паролем.

    updatePassword(newPassword)
    Устанавливает пароль пользователя на newPassword. Это частная функция.

    Функции класса Admin
    deleteUser(userToDelete): Принимает строку userToDelete и возвращает строковое
    сообщение: "Пользователь [userToDelete] был удален."

    Результат
    [testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

    Ограничения
    Пароль должен быть частной переменной
    updatePassword должен быть частной функцией
    Вы должны использовать ключевое слово extends для создания связи между
    пользователем и администратором
*/

class User{
    #password;

    constructor(username, password){
        this.username = username;
        this.#password = password;

    }
    get password(){
        return this.#password;
    }
    set password(pswd){
        this.#password = pswd;
    }

    #updatePassword(newPassword){
        return this.password = newPassword;
    }
    resetPassword(newPassword){
        this.#updatePassword(newPassword);
        return 'You have updated your password successfully!'
    }
}

class Admin extends User{
    constructor(username, password){
        super(username, password);
        this.isAdmin = true;
    }
    deleteUser(userToDelete){
        return `Пользователь ${userToDelete} был удален.`;
    }
}

const testUser = new User("testUser", "userPassword");
const testAdmin = new Admin("testAdmin", "adminPassword");

const result = [testUser, testAdmin];


//user
// const user = result[0];
// console.log(user);
// console.log(user.username);
// //console.log(user.#password);
// console.log(user.password); // getter
// console.log(user.resetPassword('NewPassword123'))
// console.log(user.password); // getter
//console.log(user.deleteUser('test'));

//admin
const admin = result[1];
console.log(admin.username);
//console.log(admin.#password);
console.log(admin.password); // getter
console.log(admin.resetPassword('NewPasswordAdmin123'))
console.log(admin.password); // getter
console.log(admin.deleteUser('test'));
