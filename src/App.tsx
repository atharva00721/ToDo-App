import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

export default function MyCheckbox() {
  interface Todo {
    id: string;
    todo: string;
    isCompleted: boolean;
  }

  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const [editTodoValue, setEditTodoValue] = useState<string>("");

  const handleAdd = () => {
    setTodos([
      ...todos,
      { id: uuidv4(), todo: inputValue, isCompleted: false },
    ]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleEdit = (todo: Todo) => {
    setEditTodoId(todo.id);
    setEditTodoValue(todo.todo);
  };

  const handleSave = (editedTodoId: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === editedTodoId ? { ...todo, todo: editTodoValue } : todo
    );
    setTodos(newTodos);
    setEditTodoId(null);
  };
  const handleDelete = (id: string) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="w-2/3 mx-auto my-20 bg-gray-900 p-5 rounded-lg text-white">
        <div className="flex flex-row">
          <Input
            onChange={handleChange}
            value={inputValue}
            className="rounded-r-none border-4 border-[#cd1c45] text-black"
            type="text"
            placeholder="Add a new Item"
          />
          <Button onClick={handleAdd} className="rounded-l-none">
            Add
          </Button>
        </div>
        <Separator className="my-4" />
        <div>
          <h2 className="pb-5 text-3xl font-semibold tracking-tight first:mt-0">
            Your ToDo:
          </h2>
          {todos.length === 0 && (
            <div className="pb-5 text-md font-semibold tracking-tight first:mt-0">
              No ToDo's for now
            </div>
          )}
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex flex-row justify-between my-2  bg-gray-800 p-2  rounded-lg"
            >
              <div className="flex flex-row">
                {editTodoId === todo.id ? (
                  <>
                    <Input
                      className="text-black mr-2"
                      value={editTodoValue}
                      onChange={(e) => setEditTodoValue(e.target.value)}
                    />
                    <Button onClick={() => handleSave(todo.id)}>Save</Button>
                  </>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      name={todo.id}
                      onChange={handleCheckbox}
                      className="mx-2"
                      checked={todo.isCompleted}
                    />
                    <div
                      className={
                        todo.isCompleted
                          ? "line-through text-xl pt-1 pl-2 font-semibold"
                          : "text-xl pt-1 pl-2 font-semibold"
                      }
                      onClick={() => handleEdit(todo)}
                    >
                      {todo.todo}
                    </div>
                  </>
                )}
              </div>
              <div>
                {editTodoId === todo.id ? (
                  <Button onClick={() => setEditTodoId(null)}>Cancel</Button>
                ) : (
                  <Button onClick={() => handleEdit(todo)}>Edit</Button>
                )}
                <Button className="mx-2" onClick={() => handleDelete(todo.id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
