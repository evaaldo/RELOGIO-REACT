import Relogio from "../../Components/Relogio";
import Titulo from "../../Components/Titulo";
import GlobalStyle from "../../styles/GlobalStyles";

function PaginaInicial() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Titulo/>
      <Relogio/>
    </div>
  );
}

export default PaginaInicial;
