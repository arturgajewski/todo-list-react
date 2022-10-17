import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__item  ${
          task.done && hideDoneTasks ? "tasks__item--hide" : ""
        }`}
      >
        <button className="tasks__button tasks__button--done">
          {task.done ? "✓" : ""}
        </button>
        <div className={`tasks__body${task.done ? " task__done" : ""}`}>
          {task.content}
        </div>
        <button className="tasks__button tasks__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
