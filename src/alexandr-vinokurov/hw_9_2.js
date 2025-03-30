// Создать классы пользователя и администратора

// В этом задании мы будем использовать приватные свойства, 
// чтобы скрыть определенные значения и предотвратить прямой доступ к ним. 
// Приватные свойства могут быть доступны только внутри объявления класса.

// Мы обозначаем частную переменную или функцию символом решетки (#).

// Например, если бы у нас был класс Person с номером социального 
// страхования и функцией для расчета их налоговой категории, мы бы не 
// обязательно хотели, чтобы эта информация была общедоступной. Поэтому мы 
// можем сделать эти поля приватными, как в примере ниже:

// class Person {
//     #socialSecurityNumber;

//     #calculateTaxBracket() {
//     }
// }

// Ваша задача:

// Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User 
// имеет закрытую функцию updatePassword() и публичную функцию resetPassword(). 
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


// Функции класса User
// resetPassword(newPassword)
// Вызывает закрытую функцию updatePassword с новым паролем. 

// updatePassword(newPassword)
// Устанавливает пароль пользователя на newPassword. Это частная функция.

// Функции класса Admin
// deleteUser(userToDelete): Принимает строку userToDelete и 
// возвращает строковое сообщение: "Пользователь [userToDelete] был удален."

// Результат
// [testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

// Ограничения
// Пароль должен быть частной переменной
// updatePassword должен быть частной функцией
// Вы должны использовать ключевое слово extends для создания связи между пользователем и администратором


class User{
    #password;
    constructor(username, password) {
        if (typeof username !== 'string') {
            throw new Error('Username должен быть строкой');
        }
        
        if (typeof password !== 'string') {
            throw new Error('Password должен быть строкой');
        }

        this.username = username;
        this.#password = password;
    }

    #updatePassword(newPassword){
        if (typeof newPassword !== 'string') {
            throw new Error("Парольдолжен быть строкой");
        }
        this.#password = newPassword; 
    }

    resetPassword(newPassword){ 
        this.#updatePassword(newPassword) 
    }
}

class Admin extends User {
    isAdmin = true;
  constructor(username, password){
    super(username, password);
  }
    deleteUser(userToDelete) {
        if (typeof userToDelete !== 'string') {
            throw new Error('введите имя пользователя строкой');
        }
      return `Пользователь ${userToDelete} был удален`;
    }
  }
  const user = new User("Pasha", "123345");
  const admin = new Admin("AdminValera", "qwerty");
  console.log(user);
  console.log(admin);
//   admin.resetPassword("newAdmin123");
//   console.log(admin.deleteUser("User"));
  
