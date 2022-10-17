import "./style.css";
const Form = () => (
  <form>
    <fieldset className="form__fieldset--list">
      <p className="form__legend--paragraph">
        <input
          className="form__input"
          name="task"
          placeholder="co mam do zrobienia?"
          autoFocus
          minLength="2"
          required
        />
        <button className="button__task--addNewTask">Dodaj zadanie</button>
      </p>
    </fieldset>
    </form>

);

export default Form;
