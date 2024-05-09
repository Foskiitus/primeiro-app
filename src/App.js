import { useState } from "react";
import Nome from "./components/Nome";

function App() {
  const [aluno, setAluno] = useState("Sujeito Programador");

  function handleChangeName(nome) {
    setAluno(nome);
  }
  return (
    <div>
      <h1>Component App</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName("Ricardo Lopes")}>
        Mudar Nome
      </button>
      <br />
      <Nome aluno={aluno} idade={30} />
    </div>
  );
}

export default App;
