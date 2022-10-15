import "./style.css";
const Form = () => (
    
    <fieldset className="form__fieldset--list">
      <p className="form__legend--paragraph">
        <input
          className="form__input"
          name="task"
          placeholder="co mam do zrobienia?"
          autofocus
          minlength="2"
          required
        />
        <button className="button__task--addNewTask">Dodaj zadanie</button>
      </p>
    </fieldset>

);

export default Form;
