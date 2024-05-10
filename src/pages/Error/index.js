import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Hum, parece que essa pagina nao existe!</h1>
      <span>Voce pode estar procurando:</span>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/contato">Contatos</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Error;
