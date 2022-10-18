import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button 
        className=" buttons__item">
        {hideDone ? "Pokaż " : "Ukryj "} ukończone
        </button>
        <button
          className="buttons__item"
          disabled={tasks.every(({ done }) => done)}
          >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
