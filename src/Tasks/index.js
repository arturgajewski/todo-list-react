import "./style.css";

const Tasks = (props) => (
  <ul className="list__tasks">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`taskContent  ${
          task.done && props.hideDoneTasks ? "list__item--hide" : ""
        }`}
      >
        <button className="button__task button__task--done">
          {task.done ? "✓" : ""}
        </button>
        <div className={`task${task.done ? " task__done" : ""}`}>
          {task.content}
        </div>
        <button className="button__task button__task--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
