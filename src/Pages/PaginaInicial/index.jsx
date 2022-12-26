import Redes from "../../Components/Redes";
import Relogio from "../../Components/Relogio";
import Titulo from "../../Components/Titulo";
import GlobalStyle from "../../styles/GlobalStyles";

function PaginaInicial() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Titulo/>
      <Relogio/>
      <Redes/>
    </div>
  );
}

export default PaginaInicial;
