// exportando com export function obrigatoriamente tem de utilizar o nome App para importar.

import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext, TransactionsProvider} from './TransactionsContext'

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');
// a importacao do servidor automatica fica mais inteligente com export function.
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
 



function handleOpenNewTransactionModal() {
setIsNewTransactionModalOpen(true)

}

function handleCloseNewTransactionModal() {
setIsNewTransactionModalOpen(false); //
}

  return (
    <TransactionsProvider>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal
      isOpen= {isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}

      />
     
      <GlobalStyle />
      </TransactionsProvider>
  );
}

export default App;
