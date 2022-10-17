import "./style.css";
const Section = ({ title, body, tasksHiddenButtons }) => (
  <section>
    <div className="section__body">
      <div className="section__title">
        {title}
        {tasksHiddenButtons}
      </div>
    </div>
    <div className="section__body">{body}</div>
  </section>
);

export default Section;
