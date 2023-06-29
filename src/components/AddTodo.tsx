import { useState } from "react";
import { IItems } from "../types/todo";

interface IProps {
  onAddTodo: (todo: IItems) => void;
}

type OnlyTitle = Pick<IItems, "title">;

const AddTodo: React.FC<IProps> = (props) => {
  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});

  function titleHandler(event: React.ChangeEvent<HTMLInputElement>) {
    titleTodo({
      title: event.target.value,
    });
  }

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    if (!todo.title) {
      return;
    }

    props.onAddTodo(todo as IItems);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" onChange={titleHandler} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
