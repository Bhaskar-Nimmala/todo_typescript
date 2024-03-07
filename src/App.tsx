import { FC, useState } from 'react';
import './App.css';

interface AddTodoitem {
  initValue: string;
  addTodoitem: (item: string) => void
}

const Todo: FC<AddTodoitem> = (props) => {

  const [todo, setTodo] = useState(props.initValue);

  const handleAddTodo = (item: string) => {
    props.addTodoitem(item)
  }

  return (<>
    <input type="text" name="todo" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button type="button" onClick={() => handleAddTodo(todo)}>Add todo</button>
  </>)
}


function App() {
  const [todolist, setTodo] = useState<string[]>([]);

  const handleTodo = (item: string) => {
    setTodo([...todolist, item])
  }

  return (
    <>
      <h3>TO DO APP</h3>
      <Todo addTodoitem={(item) => handleTodo(item)} initValue='todo' />
    </>
  );
}

export default App;
