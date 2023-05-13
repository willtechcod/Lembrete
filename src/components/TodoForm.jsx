import { useState } from 'react';

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  }

  

  return (
    <div className='todo-form'>
        <h2>Criar Lembrete:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
              placeholder='Digite o título'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              />
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Selecione uma categoria</option>
                <option value="Piking">Piking</option>
                <option value="Contato">E-mail ou Telefonar</option>
                <option value="Relatorios">Relatórios</option>
            </select>
            <button className='adicionar' type="submit">Criar Lembrete</button>
        </form>
    </div>
  )
}

export default TodoForm;