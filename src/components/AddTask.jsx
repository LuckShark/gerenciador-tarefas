import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState(""); //o valor desse state é o valor do input
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border bg-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border bg-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar se está tudo preenchido
          //o trim é para espaços em branco (tipo, se eu só apertar na barra pra ele não contar como preenchido)
          if(!title.trim() || !description.trim()){
            return alert ("Preencha o título e descrição");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
