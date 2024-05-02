import axios from 'axios';
import React, { useState, useEffect } from 'react';


  function TodoList() {
    const [tasks, setTasks] = useState([]);
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


const csrfToken = "wCgvDxAmAE6KszfblzwHQmLFfSuC0zFKKzdV30iC";
const axiosInstance = axios.create({
  headers: {
    'X-CSRF-TOKEN': csrfToken,
    'Content-Type': 'application/json',
  }
});
// Функция для отправки списка задач на бэкенд
const saveTaskToBackend = (task) => {
  axiosInstance.post('//localhost:8000/api/tasks', task)
    .then(response => {
      console.log('Задача успешно сохранена на бэкенд:', response.data);
    })
    .catch(error => {
      console.error('Ошибка сохранения задачи на бэкенд:', error);
    });
};
// Функция для удаления задачи
const deleteTask = (taskId) => {
  // Отправляем запрос на удаление задачи с заданным идентификатором
  axiosInstance.delete(`//localhost:8000/api/tasks/${taskId}`)
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
      
        {Array.isArray(tasks) && tasks.map(task => (
            <div className='rounded-2xl border-solid border w-11/12 flex flex-col p-4 gap-3' key={task.id}>
              <strong className='text-3xl'>{task.title}</strong>
              <p className='whiteColor'>{task.description}</p> 
              
              <p className='whiteColor'>
                Статус: {task.completed ?
                 <button className="text-green-500">✔</button> : <button className="text-red-600">✖</button>} 
              </p> 
              <div className='self-end'>
                <button onClick={() => deleteTask(task.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>  
                </button>
              </div>
            </div>
        ))}
    </div>
  );
}

export default TodoList;
