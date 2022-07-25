import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

//importamos a imagem, e entao podemos usar o nome dado a variavel que armazena a imagem a nossa tag em src.


export function Header (){

return (
<Container> 
<Content>
 <img src={logoImg} alt="dt money" />
 <button type="button">
    Nova transação
 </button>
 </Content>
</Container>
)
}