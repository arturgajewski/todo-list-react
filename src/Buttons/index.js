import "./style.css";

const Buttons = ({tasks,hideDoneTasks}) => (
     <div className="button__item">
 {tasks.length > 0 && (
  <>
<button className=" button__item">
        {hideDoneTasks ? "Pokaż " : "Ukryj "}ukończone
      </button>
      <button
      className="button__item"
      disabled={tasks.every(({done}) => done)}  
      >
        Ukończ wszystkie
      </button>
  </>
 )}
    </div>
  
);

export default Buttons;
