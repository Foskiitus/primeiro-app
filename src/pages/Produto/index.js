import { useParams } from "react-router";
function Produto() {
  const { id } = useParams();
  return (
    <div>
      <h1>Grade de produtos</h1>
      <span>Produto selecionado: {id} </span>
    </div>
  );
}

export default Produto;
