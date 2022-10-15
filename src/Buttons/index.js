import "./style.css";

const Buttons = ({tasks,hideDoneTasks}) => (
     tasks.length > 0 && (
    <div className="button__item">
      <button className=" button__item">
        {hideDoneTasks ? "Pokaż " : "Ukryj "}ukończone
      </button>
      <button
      className="button__item"
      disabled={tasks.every(({done}) => done)}
        
      >
        Ukończ wszystkie
      </button>
    </div>
  )
);

export default Buttons;
