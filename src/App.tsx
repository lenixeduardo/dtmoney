// exportando com export function obrigatoriamente tem de utilizar o nome App para importar.
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

// a importacao do servidor automatica fica mais inteligente com export function.
export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
