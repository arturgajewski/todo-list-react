import "./style.css";

const onDelete = (name) => {
  console.log(`Nazwa zadania do usunięcia ${name}`)
};

const Tasks = ({ tasks, hideDone }) => {
  return (
    <ul className="tasks section__body">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`tasks__item  
        ${task.done && hideDone ? "tasks__item--hide" : ""}`}
        >
          <button className="tasks__button tasks__button--done">
            {task.done ? "✓" : ""}
          </button>
          <div className={`tasks__body${task.done ? " task__done" : ""}`}>
            {task.content}
          </div>
          <button
            className="tasks__button tasks__button--remove"
            onClick={() => onDelete(task.content)}
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
