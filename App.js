import logo from "./logo.svg";
import "./App.css";
import validation from "./validation";

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>To Do List</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg ">
            Please fill in your to do list in the form below
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
        <div class="todo-box">
          <div class="todo-container">
            <ul class="flex">
              <li>1</li>
              <li class="space">Attend SOTU</li>
            </ul>
            <ul class="flex">
              <li>2</li>
              <li class="space">Attend Q&A</li>
            </ul>
          </div>
        </div>
      </form>
      <input class="remove" type="number" placeholder="Insert number"></input>
      <br></br>

      <button class="btn__danger delete">Delete</button>
    </div>
  );
}

export default App;
