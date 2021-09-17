import React from 'react'
import styled from 'styled-components'


const MainConteiner = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column-reverse;
  /* justify-content: space-space-between; */
  background-color: lightgreen;
  margin-left: 25vw;
  border: 1px solid black;
  `

const ConteinerMensagem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blue;
  justify-content: center;
  /* padding: 1%; */
  `  
const TamanhoInputUsuario = styled.input`
  width: 15%;
`
const TamanhoInputMensagem = styled.input`
  width: 75%;
`
const TamanhoButton = styled.button`
  width: 10%;
`


class Mensagem extends React.Component {
    state = {
      usuario: '',
      mensagem: '',
    }

    render() {
      return (
      <MainConteiner>  
          <ConteinerMensagem>
            <TamanhoInputUsuario type="text" placeholder="Usuário"  value="" />
            <TamanhoInputMensagem type="text" placeholder="Mensagem" value="" />
            <TamanhoButton>Enviar</TamanhoButton>
          </ConteinerMensagem>
      </MainConteiner> 
        
       )
    }
}    


export default Mensagem    