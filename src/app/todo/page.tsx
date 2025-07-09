import fs from 'fs/promises';
import path from 'path';

type Todo = {id: number; title: string; completed: boolean};

export default async function TodoPage() {
  const filePath = path.join(process.cwd(), 'data', 'todos.json');
  const json = await fs.readFile(filePath, 'utf-8');
  const todos: Todo[] = JSON.parse(json);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}