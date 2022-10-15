import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";

const tasks = [
  { id: 1, content: "pokroić jabłko", done: false },
  { id: 2, content: "zjeść gruszkę", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <form>
       <Header />
        <Section 
        title="Dodaj nowe zadanie"
         body={<Form />
        } 
         />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
          tasksHiddenButtons={
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          }
        />
      </form>

      <Footer />
    </main>
  );
}

export default App;
