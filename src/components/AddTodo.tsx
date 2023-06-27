import { useRef } from "react";

const AddTodo: React.FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    console.log(titleInputRef.current?.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" ref={titleInputRef} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
