import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div>
      <h1>Bem vindo a pagina Sobre o curso de ReactJS</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contato">Contatos</Link>
    </div>
  );
}

export default Sobre;
