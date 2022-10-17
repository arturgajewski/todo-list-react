import "./style.css";
const Form = () => (
  <form className="form">
        <input
          className="form__input"
          name="task"
          placeholder="co mam do zrobienia?"
          autoFocus
          minLength="2"
          required
        />
        <button className="button__addNewTask">Dodaj zadanie</button>
    </form>

);

export default Form;
