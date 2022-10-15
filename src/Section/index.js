import "./style.css"
const Section = ({title,body,tasksHiddenButtons}) => (
   <section>
    <fieldset className="form__fieldset--list">
          <p>
            <label className="form__label--list">
              {title}
              {tasksHiddenButtons}
            </label>
          </p>
        </fieldset>
        <fieldset className="form__fieldset form__fieldset--listTask">
          <p>
            <label className="form__label">
             {body}
            </label>
          </p>
        </fieldset>
        </section>
);

export default Section;