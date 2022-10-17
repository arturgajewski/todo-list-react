import "./style.css"
const Section = ({title,body,tasksHiddenButtons}) => (
   <section>
    <fieldset className="form__fieldset--list">
            <label className="form__label--list">
              {title}
              {tasksHiddenButtons}
            </label>
        </fieldset>
        <fieldset className="form__fieldset form__fieldset--listTask">
            <label className="form__label">
             {body}
            </label>
        </fieldset>
        </section>
);

export default Section;