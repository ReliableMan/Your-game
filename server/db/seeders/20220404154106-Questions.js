'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        question: "Что нужно иметь при поступлении в Эльбрус?",
        answer: "компьютер",
        theme_id: 1,
        complexity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Что нужно делать в обед?",
        answer: "обедать",
        theme_id: 1,
        complexity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Одна из самых распространенных проблем студентов во время лекции по Express или React?",
        answer: "сон",
        theme_id: 1,
        complexity: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Сколько времени даёт Роман на выполнение сложных заданий?",
        answer: "полчасика",
        theme_id: 1,
        complexity: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "О чём был последний сон Андрея Охотникова?",
        answer: "разборка тойоты",
        theme_id: 1,
        complexity: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Что значит IT?",
        answer: "информационные технологии",
        theme_id: 2,
        complexity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Стоит ли идти в IT?",
        answer: "стоит",
        theme_id: 2,
        complexity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Кто сможет помочь разрешить возникшую проблему в процессе обучения?",
        answer: "помощники преподавателя",
        theme_id: 2,
        complexity: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Корявый, но работающий код, это?",
        answer: "костыль", 
        theme_id: 2,
        complexity: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Кто может помочь тебе разобраться с новой технологией, если ты кодишь поздно вечером/ночью?", 
        answer: "индус с ютуба",
        theme_id: 2,
        complexity: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Что такое React (фича, фреймворк, дичь, библиотека) ? ",
        answer: "библиотека",
        theme_id: 3,
        complexity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту?",
        answer: "пропсы",
        theme_id: 3,
        complexity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Как называют компонент, который получает данные в одном объекте в качестве параметра и возвращает React-элемент?",
        answer: "функциональным",
        theme_id: 3,
        complexity: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Как называют функцию, с помощью которой вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов?",
        answer: "хук",
        theme_id: 3,
        complexity: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Как называется метод, который передаёт объект, известный как действие, в Redux?",
        answer: "dispatch()",
        theme_id: 3,
        complexity: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Как называется специальный блок который перехватывает все ошибки в promise?",
        answer: "catch",
        theme_id: 4,
        complexity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Как называется процесс, когда JS первый раз проходит по скрипту и запоминает переменные и функции, которые понадобятся во время исполнения скрипта?",
        answer: "хостинг",
        theme_id: 4,
        complexity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Функция, которая передана в другую функцию и может быть ей вызвана в нужный момент времени, например, по завершению работы?",
        answer: "колбэк",
        theme_id: 4,
        complexity: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Как выглядит оператор опциональной последовательности?",
        answer: "?.",
        theme_id: 4,
        complexity: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Как называется процесс, с помощью которого можно получать данные с сервера в фоновом режиме?",
        answer: "Ajax",
        theme_id: 4,
        complexity: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "О чём был сольный проект Дениса в конце второй фазы?",
        answer: "мемах",
        theme_id: 5,
        complexity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Что просит сделать Денис во время стендапов?",
        answer: "включить камеру",
        theme_id: 5,
        complexity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Это слово использует Денис во время большого восхищения?",
        answer: "красотища",
        theme_id: 5,
        complexity: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:  "Продолжите выражение: 'Главное - не забыть главное, а то забудешь главное - а это ... !'?",
        answer: "главное", 
        theme_id: 5,
        complexity: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Чем занимался Денис во время лекции Тараса по Redux?",
        answer: "спал",
        theme_id: 5,
        complexity: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Продолжите фразу: Какую психушку, вы че ...?",
        answer: "угораете",
        theme_id: 6,
        complexity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Продолжите фразу: Я только пришёл пришёл на работу, ...",
        answer: "А уже устал",
        theme_id: 6,
        complexity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Когда нибудь наступит завтра",
        answer: "но не сегодня",
        theme_id: 6,
        complexity: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Кто мы????",
        answer: "мы программисты",
        theme_id: 6,
        complexity: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Стандартный строй классической гитары? ",
        answer: "EBGDAE",
        theme_id: 6,
        complexity: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};