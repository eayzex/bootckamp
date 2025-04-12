import TodoList from './todo.js';

const myList = new TodoList();

myList.addTask('Study JavaScript');
myList.addTask('Build a todo app');
myList.addTask('Drink water');

myList.markComplete(1);

myList.listTasks();
