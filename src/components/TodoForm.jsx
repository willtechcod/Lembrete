import  { useState } from 'react';

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
                <option value="E-mail ou Telefonar">E-mail ou Telefonar</option>
                <option value="Ajuste de notas ou CCE">Ajuste de notas ou CCE</option>
                <option value="Contato com fornecedores">Contato com fornecedores</option>
                <option value="Relatorios">Relatórios</option>
                <option value="Quebras">Quebras</option>
                <option value="Ajuste de notas">Ajuste de notas</option>
                <option value="Pedir ou Ajustar materiais">Pedir ou Ajustar materiais</option>
            </select>
            <button className='adicionar' type="submit">Criar Lembrete</button>
        </form>
    </div>
  )
}

export default TodoForm;