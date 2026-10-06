import "./DiaAtual.css";

function DiaAtual() {
  const hoje = new Date();

  return <div className="DiaAtual">{hoje.getDate()}</div>;
}

export default DiaAtual;
