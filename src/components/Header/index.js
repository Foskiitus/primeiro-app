import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Header da pagina</h2>
      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
    </header>
  );
}
