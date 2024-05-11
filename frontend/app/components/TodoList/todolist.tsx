import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Task from '../Task/task';

export interface Tasks{
  id: string;
  title : string;
  description : string;
  completed : boolean;
}
  function TodoList() {
    console.log("TodoList component rendered");
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('Собрать рюкзак');
    const [newTaskDescription, setNewTaskDescription] = useState('в 9:00, не забудь');
  
    

    useEffect(() => {
      // Функция для загрузки списка задач с бэкенда
      const loadTasksFromBackend = () => {
        axiosInstance.get('//localhost:8000/api/tasks')
          .then(response => {
            console.log('Список задач успешно загружен с бэкенда:', response.data);
            setTasks(response.data);
          })
          .catch(error => {
            console.error('Ошибка загрузки списка задач с бэкенда:', error);
          });
      };
  
      // Загружаем список задач с бэкенда после монтирования компонента
      loadTasksFromBackend();
    }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз после монтирования компонента


// Функция для добавления новой задачи
const addTask = () => {
  if (newTaskTitle.trim() !== '' && newTaskDescription.trim() !== '') {
    const newTask = {
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false
    };

    // Отправляем только новую задачу на бэкенд
    saveTaskToBackend(newTask);

    // Добавляем новую задачу в список задач
    setTasks(tasks => [...tasks, newTask]);

    // Очищаем поля ввода
    setNewTaskTitle('');
    setNewTaskDescription('');
  }
};


const csrfToken = "SgcVM4gAI5JI4EhOIFn27UWDvgWw3IewWJixwlQk";
const axiosInstance = axios.create({
  headers: {
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/json',
  }
});
// Функция для отправки списка задач на бэкенд
const saveTaskToBackend = (task : []) => {
  axiosInstance.post('//localhost:8000/api/tasks', task)
    .then(response => {
      console.log('Задача успешно сохранена на бэкенд:', response.data);
    })
    .catch(error => {
      console.error('Ошибка сохранения задачи на бэкенд:', error);
    });
};
// Функция для удаления задачи
const deleteTask = (taskId : string) => {
  console.log(taskId);
  // Отправляем запрос на удаление задачи с заданным идентификатором
  axiosInstance.delete(`//localhost:8000/api/tasks/delete/${taskId}`)
    .then(response => {
      // Фильтруем новый список задач, выдаем только те, которые не равны тому, которому мы удалили
      setTasks(tasks.filter(task => task.id !== taskId));
      console.log('Задача успешно удалена:', response.data);
    })
    .catch(error => {
      console.error('Ошибка удаления задачи:', error);
    });
};


  return (
    <div className='flex-col flex gap-5 items-center'>
      <h1 className='text-5xl'>Туду-лист</h1>
      <input type="text" className='rounded-full p-2 px-5 w-11/12' value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} placeholder="Имя задачи" />
      <input type="text" className='rounded-full p-2 px-5 w-11/12' value={newTaskDescription} onChange={(e) => setNewTaskDescription(e.target.value)} placeholder="Описание" />
      <button className='rounded-full p-2 px-5 w-11/12 bg-white hover:text-white hover:bg-fuchsia-600' onClick={addTask}>Добавить задачу</button>
      
        {Array.isArray(tasks) && tasks.map(taskItem => (
            <Task key={taskItem.id} task={taskItem} deleteFunction={() => deleteTask(taskItem.id)}></Task>
        ))}
    </div>
  );
}

export default TodoList;
