import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // Функция для увеличения счетчика на 1 и добавления элемента в список
  const incrementAndAddItem = () => {
    setCount(count + 1);
    setItems([...items, 
    <div>
      <p>Вы кликнули {count} раз</p>
      {/* При клике на кнопку вызываем функцию incrementAndAddItem */}
      <button onClick={incrementAndAddItem}>Добавить элемент</button>
      {/* Отображаем добавленные элементы */}
      {items}
    </div>]);
  };

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      {/* При клике на кнопку вызываем функцию incrementAndAddItem */}
      <button onClick={incrementAndAddItem}>Добавить элемент</button>
      {/* Отображаем добавленные элементы */}
      {items}
    </div>
  );
}

export default Counter;
