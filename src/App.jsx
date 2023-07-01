import { useState } from 'react'
import Todo from './components/Todo';

import './App.css'
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    
    {
      id: 1,
    text: "Entrar em Contato com DP, referente ao colaborador 0061177 ex:",
    category: "Contato",
    isCompleted: false,
  },
    {
      id: 2,
    text: "Criar um relatório mensal de entrada e saída de paletes ex:",
    category: "Relatorios",
    isCompleted: false,
  },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos);
  }

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
    todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
    todo.id === id 
    ? todo.isCompleted 
    =!todo.isCompleted 
    : todo
    )
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de Lembretes!</h1>
      <Search
        search={search}
        setSearch={setSearch}
       />
       
       <Filter
        filter={filter}
        setFilter={setFilter}
        setSort={setSort}
       />

      

      <div className="todo-list">
          {todos
          .filter((todo) => 
          filter === "All" 
          ? true 
          : filter === "Completed"
          ? todo.isCompleted
          : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => 
            sort === "Asc"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm 
        addTodo={addTodo}
      />
    </div>
  )
}

export default App;
