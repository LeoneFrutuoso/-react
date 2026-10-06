import "./App.css";
import DiaAtual from "./componentes/DiaAtual/DiaAtual";
import MesAtual from "./componentes/MesAtual/Mesatual";
import OlaMundo from "./componentes/OlaMundo/OlaMundo";

function App() {
  return (
    <>
      <span>
        1. Crie um componente chamado 'OlaMundo' que mostra uma mensagem: "Olá,
        Mundo!!" em uma div com o fundo vermelho, texto centralizado na cor
        azul.
      </span>

      <OlaMundo />
       
      <hr />

      <span>
        2. Crie um componente chamado 'DiaAtual' que mostra o texto: "15" em uma
        div redonda com o fundo azul, texto centralizado na cor branco.
      </span>

      <DiaAtual />

      <hr />

      <MesAtual/>
      


    </>
  );
}

export default App;
