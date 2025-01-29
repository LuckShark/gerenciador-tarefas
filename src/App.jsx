import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React no front para projetos voluntários",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Back",
      description:
        "Estudar Back, possivelmente com Spring, para o trabalho regular",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Banco",
      description: "Estudar banco de dados e suas integrações",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }; //os ... pega tudo que tem na task
      }
      //ELSE: NÃO PRECISO ATUALIZA A TAREFA
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId); //essa lista vai ter todas as tasks exceto a que eu quero deletar
    setTasks(newTasks);
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]) //a nova lista vai ter todas as tarefas anteriores (tasks) mais essa nova que eu coloquei (newTask)
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit = {onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
