import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Checkbox } from "./components/ui/checkbox";

export default function MyCheckbox() {
  interface Todo {
    id: string; // Added id property
    todo: string;
    isCompleted: boolean;
  }

  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    setTodos([
      ...todos,
      { id: uuidv4(), todo: inputValue, isCompleted: false }, // Generate unique id
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

  return (
    <div>
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
          {todos.map((todo) => (
            <div key={todo.id} className="flex flex-row justify-between my-2">
              <div className="flex flex-row">
                <Checkbox
                  name={todo.id}
                  onChange={() => handleCheckbox(todo.id)} // Pass id directly
                  className="mr-2"
                  value={todo.isCompleted}
                />
                <div className={todo.isCompleted ? "line-through" : ""}>
                  {todo.todo}
                </div>
              </div>
              <div>
                <Button className="mx-2">Edit</Button>
                <Button className="mx-2">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
