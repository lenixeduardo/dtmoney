import { useState } from 'react';
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

//importamos a imagem, e entao podemos usar o nome dado a variavel que armazena a imagem a nossa tag em src.
interface HeaderProps {

onOpenNewTransactionModal : () => void;

}

export function Header ({onOpenNewTransactionModal} : HeaderProps){



   
return (
<Container> 
<Content>
 <img src={logoImg} alt="dt money" />
 <button type="button" onClick={onOpenNewTransactionModal}>
    Nova transação
 </button>


 </Content>
</Container>
)
}